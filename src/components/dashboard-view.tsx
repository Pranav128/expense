"use client"; // Added "use client" directive

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { Expense } from '@/types';
import ExpenseDashboard from '@/components/expense-dashboard';
import ExpenseForm from '@/components/expense-form';
import ExpenseList from '@/components/expense-list';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { addExpense, fetchExpenses, updateExpense, deleteExpense } from '@/lib/utils';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

// Define the pagination state
const PAGE_SIZE = 10; // Number of expenses per page


export default function DashboardView() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1); // Current page number
  const [hasMore, setHasMore] = useState(true); // Indicates if there are more pages to load

  const { token, logout } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const loadExpenses = useCallback(async () => {
    if (token && hasMore) { // Only load if there are more pages
      setIsLoading(true);
      try {
        const data: Expense[] = await fetchExpenses(token, page, PAGE_SIZE); // Fetch expenses with pagination
        if (data.length < PAGE_SIZE) {
          setHasMore(false); // No more pages
        }
        setExpenses(prevExpenses => [...prevExpenses, ...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
        setPage(prevPage => prevPage + 1); // Increment page number for next load
      } catch (error) {
        console.error("Failed to fetch expenses:", error);
        logout();
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    } else if (!token) {
      setIsLoading(false); // Stop loading if no token
    }
  }, [token, logout, router]);

  useEffect(() => {
    loadExpenses();
  }, [loadExpenses]);

  const handleAddExpense = async (newExpenseData: Omit<Expense, '_id'>) => {
    if (!token) {
      console.error("No auth token found");
      return;
    }
    try {
      const newExpense = await addExpense(newExpenseData, token);
      setExpenses(prev => [newExpense, ...prev].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
      toast({ title: "Expense Added", description: `"${newExpense.description}" has been added.` });
    } catch (error) {
      console.error("Failed to add expense:", error);
      toast({ title: "Error", description: "Failed to add expense.", variant: "destructive" });
    }
  };
  
  const handleUpdateExpense = async (updatedExpenseData: Expense) => {
    if (!token) {
        console.error("No auth token found");
        return;
    }
    try {
        const updatedExpense = await updateExpense(updatedExpenseData, token);
        setExpenses(prev => prev.map(exp => exp._id === updatedExpense._id ? updatedExpense : exp).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
        toast({ title: "Expense Updated", description: `"${updatedExpense.description}" has been updated.` });
    } catch (error) {
        console.error("Failed to update expense:", error);
        toast({ title: "Error", description: "Failed to update expense.", variant: "destructive" });
    }
  };

  const handleDeleteExpense = async (expenseId: string) => {
    if (!token) {
        console.error("No auth token found");
        return;
    }
    const expenseToDelete = expenses.find(e => e._id === expenseId);
    try {
        await deleteExpense(expenseId, token);
        setExpenses(prev => prev.filter(exp => exp._id !== expenseId));
        toast({ title: "Expense Deleted", description: `"${expenseToDelete?.description}" has been deleted.` });
    } catch (error) {
        console.error("Failed to delete expense:", error);
        toast({ title: "Error", description: "Failed to delete expense.", variant: "destructive" });
    }
  };
  
  const allCategories = useMemo(() => {
    return [...new Set(expenses.map(e => e.category))].sort();
  }, [expenses]);

  // Function to load more expenses when scrolling
  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !isLoading && hasMore) {
      loadExpenses();
    }
  }, [isLoading, hasMore, loadExpenses]);


  return (
    <main className="flex-1 space-y-6 p-4 sm:p-6 md:p-8">
      {/* <div className="flex items-center justify-between space-y-2">
        <h1 className="text-4xl font-bold tracking-tight font-headline text-primary">ExpenseZen</h1>
        <AccountDropdown />
      </div> */}
      
      <ExpenseDashboard expenses={expenses} isLoading={isLoading} />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2">
            <Card className="h-full">
                <CardHeader>
                    <CardTitle className="font-headline">Add New Expense</CardTitle>
                </CardHeader>
                <CardContent>
                    <ExpenseForm onSubmit={handleAddExpense} />
                </CardContent>
            </Card>
        </div>
        <div className="lg:col-span-3">
            <ExpenseList 
              expenses={expenses} 
              isLoading={isLoading} 
              categories={allCategories}
              onUpdateExpense={handleUpdateExpense}
              onDeleteExpense={handleDeleteExpense}
            />
        </div>
      </div>
    </main>
  );
}
