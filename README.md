<!-- # Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.
-------------------------


db.expenses.insertMany([
  {
    "description": "Netflix Monthly Subscription",
    "amount": 15.99,
    "category": "Entertainment",
    "date": "2025-01-01",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Whole Foods Grocery Shopping",
    "amount": 87.45,
    "category": "Groceries",
    "date": "2025-01-02",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Shell Gas Station Fill-up",
    "amount": 42.30,
    "category": "Transportation",
    "date": "2025-01-03",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "iPhone Screen Repair",
    "amount": 129.99,
    "category": "Electronics",
    "date": "2025-01-05",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Starbucks Coffee",
    "amount": 5.75,
    "category": "Dining Out",
    "date": "2025-01-06",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Amazon Prime Membership",
    "amount": 139.00,
    "category": "Subscriptions",
    "date": "2025-01-07",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Target Household Items",
    "amount": 63.28,
    "category": "Shopping",
    "date": "2025-01-08",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Dentist Checkup",
    "amount": 120.00,
    "category": "Healthcare",
    "date": "2025-01-09",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Electricity Bill Payment",
    "amount": 78.34,
    "category": "Utilities",
    "date": "2025-01-10",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Spotify Premium Subscription",
    "amount": 9.99,
    "category": "Entertainment",
    "date": "2025-01-11",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Olive Garden Dinner",
    "amount": 45.60,
    "category": "Dining Out",
    "date": "2025-01-12",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Gym Membership",
    "amount": 29.99,
    "category": "Fitness",
    "date": "2025-01-13",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Car Oil Change",
    "amount": 39.95,
    "category": "Auto Maintenance",
    "date": "2025-01-14",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Movie Tickets",
    "amount": 24.50,
    "category": "Entertainment",
    "date": "2025-01-15",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Water Bill Payment",
    "amount": 42.75,
    "category": "Utilities",
    "date": "2025-01-16",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Running Shoes",
    "amount": 89.99,
    "category": "Fitness",
    "date": "2025-01-17",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "CVS Pharmacy",
    "amount": 23.45,
    "category": "Healthcare",
    "date": "2025-01-18",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Internet Bill",
    "amount": 64.99,
    "category": "Utilities",
    "date": "2025-01-19",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Uber Ride",
    "amount": 18.75,
    "category": "Transportation",
    "date": "2025-01-20",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Costco Bulk Shopping",
    "amount": 156.89,
    "category": "Groceries",
    "date": "2025-01-21",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Dry Cleaning",
    "amount": 32.50,
    "category": "Personal Care",
    "date": "2025-01-22",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Desk Chair",
    "amount": 149.99,
    "category": "Furniture",
    "date": "2025-01-23",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Pizza Delivery",
    "amount": 28.45,
    "category": "Dining Out",
    "date": "2025-01-24",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Car Wash",
    "amount": 12.00,
    "category": "Auto Maintenance",
    "date": "2025-01-25",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Haircut",
    "amount": 35.00,
    "category": "Personal Care",
    "date": "2025-01-26",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Monthly Parking Fee",
    "amount": 75.00,
    "category": "Transportation",
    "date": "2025-01-27",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Phone Case",
    "amount": 19.99,
    "category": "Electronics",
    "date": "2025-01-28",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Concert Tickets",
    "amount": 120.00,
    "category": "Entertainment",
    "date": "2025-01-29",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Laundry Detergent",
    "amount": 14.99,
    "category": "Household",
    "date": "2025-01-30",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Monthly Metro Pass",
    "amount": 56.00,
    "category": "Transportation",
    "date": "2025-01-31",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Adobe Creative Cloud",
    "amount": 29.99,
    "category": "Software Subscriptions",
    "date": "2025-02-01",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Valentine's Day Flowers",
    "amount": 45.00,
    "category": "Gifts",
    "date": "2025-02-02",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Dinner at Italian Restaurant",
    "amount": 68.75,
    "category": "Dining Out",
    "date": "2025-02-03",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Winter Coat",
    "amount": 129.99,
    "category": "Clothing",
    "date": "2025-02-04",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Car Insurance Payment",
    "amount": 112.50,
    "category": "Insurance",
    "date": "2025-02-05",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Weekly Farmers Market",
    "amount": 34.20,
    "category": "Groceries",
    "date": "2025-02-06",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Netflix Monthly Subscription",
    "amount": 15.99,
    "category": "Entertainment",
    "date": "2025-02-07",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Dog Food",
    "amount": 42.99,
    "category": "Pets",
    "date": "2025-02-08",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Bluetooth Headphones",
    "amount": 89.99,
    "category": "Electronics",
    "date": "2025-02-09",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Weekend Getaway Hotel",
    "amount": 187.50,
    "category": "Travel",
    "date": "2025-02-10",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Gas Station Snacks",
    "amount": 8.45,
    "category": "Food",
    "date": "2025-02-11",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Monthly Phone Bill",
    "amount": 65.00,
    "category": "Utilities",
    "date": "2025-02-12",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Office Supplies",
    "amount": 23.89,
    "category": "Work Expenses",
    "date": "2025-02-13",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Valentine's Day Gift",
    "amount": 75.00,
    "category": "Gifts",
    "date": "2025-02-14",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Car Battery Replacement",
    "amount": 145.99,
    "category": "Auto Maintenance",
    "date": "2025-02-15",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Grocery Delivery",
    "amount": 92.34,
    "category": "Groceries",
    "date": "2025-02-16",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Movie Night Snacks",
    "amount": 18.75,
    "category": "Entertainment",
    "date": "2025-02-17",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Yoga Mat",
    "amount": 29.99,
    "category": "Fitness",
    "date": "2025-02-18",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Dentist Visit",
    "amount": 85.00,
    "category": "Healthcare",
    "date": "2025-02-19",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Amazon Kindle Book",
    "amount": 12.99,
    "category": "Education",
    "date": "2025-02-20",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Car Wash Membership",
    "amount": 25.00,
    "category": "Auto Maintenance",
    "date": "2025-02-21",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Desk Lamp",
    "amount": 39.99,
    "category": "Furniture",
    "date": "2025-02-22",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Sushi Dinner",
    "amount": 54.30,
    "category": "Dining Out",
    "date": "2025-02-23",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Monthly Gym Membership",
    "amount": 29.99,
    "category": "Fitness",
    "date": "2025-02-24",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Winter Boots",
    "amount": 99.99,
    "category": "Clothing",
    "date": "2025-02-25",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Electric Bill Payment",
    "amount": 72.45,
    "category": "Utilities",
    "date": "2025-02-26",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Prescription Medication",
    "amount": 15.00,
    "category": "Healthcare",
    "date": "2025-02-27",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Bluetooth Speaker",
    "amount": 79.99,
    "category": "Electronics",
    "date": "2025-02-28",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "March Netflix Subscription",
    "amount": 15.99,
    "category": "Entertainment",
    "date": "2025-03-01",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Weekend Brunch",
    "amount": 32.50,
    "category": "Dining Out",
    "date": "2025-03-02",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Office Chair",
    "amount": 159.99,
    "category": "Furniture",
    "date": "2025-03-03",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Car Tire Rotation",
    "amount": 35.00,
    "category": "Auto Maintenance",
    "date": "2025-03-04",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Monthly Haircut",
    "amount": 35.00,
    "category": "Personal Care",
    "date": "2025-03-05",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Grocery Shopping",
    "amount": 87.34,
    "category": "Groceries",
    "date": "2025-03-06",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Coffee Maker",
    "amount": 59.99,
    "category": "Appliances",
    "date": "2025-03-07",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Weekend Movie Tickets",
    "amount": 24.50,
    "category": "Entertainment",
    "date": "2025-03-08",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Gas Station Fill-up",
    "amount": 38.75,
    "category": "Transportation",
    "date": "2025-03-09",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Jeans",
    "amount": 49.99,
    "category": "Clothing",
    "date": "2025-03-10",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Dinner with Friends",
    "amount": 62.40,
    "category": "Dining Out",
    "date": "2025-03-11",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Monthly Water Bill",
    "amount": 42.75,
    "category": "Utilities",
    "date": "2025-03-12",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Plant for Home",
    "amount": 24.99,
    "category": "Home Decor",
    "date": "2025-03-13",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Car Wash",
    "amount": 12.00,
    "category": "Auto Maintenance",
    "date": "2025-03-14",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Starbucks Coffee",
    "amount": 5.75,
    "category": "Dining Out",
    "date": "2025-03-15",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Running Shoes",
    "amount": 89.99,
    "category": "Fitness",
    "date": "2025-03-16",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Monthly Internet Bill",
    "amount": 64.99,
    "category": "Utilities",
    "date": "2025-03-17",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Grocery Delivery",
    "amount": 92.34,
    "category": "Groceries",
    "date": "2025-03-18",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Bluetooth Earbuds",
    "amount": 79.99,
    "category": "Electronics",
    "date": "2025-03-19",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Dinner at Steakhouse",
    "amount": 78.50,
    "category": "Dining Out",
    "date": "2025-03-20",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Monthly Parking Fee",
    "amount": 75.00,
    "category": "Transportation",
    "date": "2025-03-21",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Desk Organizer",
    "amount": 29.99,
    "category": "Office Supplies",
    "date": "2025-03-22",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Haircut",
    "amount": 35.00,
    "category": "Personal Care",
    "date": "2025-03-23",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Car Oil Change",
    "amount": 39.95,
    "category": "Auto Maintenance",
    "date": "2025-03-24",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Monthly Phone Bill",
    "amount": 65.00,
    "category": "Utilities",
    "date": "2025-03-25",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Yoga Mat",
    "amount": 29.99,
    "category": "Fitness",
    "date": "2025-03-26",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Dinner at Mexican Restaurant",
    "amount": 45.60,
    "category": "Dining Out",
    "date": "2025-03-27",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Winter Jacket",
    "amount": 129.99,
    "category": "Clothing",
    "date": "2025-03-28",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Monthly Electric Bill",
    "amount": 78.34,
    "category": "Utilities",
    "date": "2025-03-29",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Weekend Grocery Shopping",
    "amount": 67.89,
    "category": "Groceries",
    "date": "2025-03-30",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Smart Watch",
    "amount": 199.99,
    "category": "Electronics",
    "date": "2025-03-31",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "April Netflix Subscription",
    "amount": 15.99,
    "category": "Entertainment",
    "date": "2025-04-01",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Car Wash",
    "amount": 12.00,
    "category": "Auto Maintenance",
    "date": "2025-04-02",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Dinner with Family",
    "amount": 85.25,
    "category": "Dining Out",
    "date": "2025-04-03",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Desk Chair",
    "amount": 149.99,
    "category": "Furniture",
    "date": "2025-04-04",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Monthly Gym Membership",
    "amount": 29.99,
    "category": "Fitness",
    "date": "2025-04-05",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Grocery Shopping",
    "amount": 87.45,
    "category": "Groceries",
    "date": "2025-04-06",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Bluetooth Speaker",
    "amount": 79.99,
    "category": "Electronics",
    "date": "2025-04-07",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Monthly Haircut",
    "amount": 35.00,
    "category": "Personal Care",
    "date": "2025-04-08",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Car Tire Replacement",
    "amount": 145.99,
    "category": "Auto Maintenance",
    "date": "2025-04-09",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Dinner at Italian Restaurant",
    "amount": 68.75,
    "category": "Dining Out",
    "date": "2025-04-10",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Monthly Water Bill",
    "amount": 42.75,
    "category": "Utilities",
    "date": "2025-04-11",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Plant for Home",
    "amount": 24.99,
    "category": "Home Decor",
    "date": "2025-04-12",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Car Wash",
    "amount": 12.00,
    "category": "Auto Maintenance",
    "date": "2025-04-13",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Starbucks Coffee",
    "amount": 5.75,
    "category": "Dining Out",
    "date": "2025-04-14",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Running Shoes",
    "amount": 89.99,
    "category": "Fitness",
    "date": "2025-04-15",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Monthly Internet Bill",
    "amount": 64.99,
    "category": "Utilities",
    "date": "2025-04-16",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Grocery Delivery",
    "amount": 92.34,
    "category": "Groceries",
    "date": "2025-04-17",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "New Bluetooth Earbuds",
    "amount": 79.99,
    "category": "Electronics",
    "date": "2025-04-18",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Dinner at Steakhouse",
    "amount": 78.50,
    "category": "Dining Out",
    "date": "2025-04-19",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  },
  {
    "description": "Software Subscription",
    "amount": 232.00,
    "category": "Software Subscriptions",
    "date": "2025-04-20",
    "userId": ObjectId('6867a90bf745ad624027b1e6')
  }
]); -->