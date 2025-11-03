// ======================================== 
// BARTERING APP - ITEM LISTING SYSTEM 
// ======================================== 
// COMPLETED VERSION WITH DETAILED EXPLANATIONS 

import React, { useState } from 'react'; 

// ======================================== 
// SECTION 1: ITEM CARD COMPONENT 
// ======================================== 
// This component displays ONE item card 
// It receives data through PROPS (like function parameters) 

// SOLUTION #1: Destructure all the props we need from parent 
// Props are passed down from the parent component (BarterApp) 
function ItemCard({ title, description, category, image, condition, owner, onTradeRequest 
}) { 
  // Why destructure? It's cleaner than writing props.title, props.description everywhere 
  // We extract: title, description, category, image, condition, owner, onTradeRequest 
   
  return ( 
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl 
transition-shadow"> 
       
      {/* SOLUTION #2: Display the image */} 
      {/* src={image} - the URL of the image passed from parent */} 
      {/* alt={title} - accessibility for screen readers */} 
      <img  
        src={image}  
        alt={title} 
        className="w-full h-48 object-cover" 
      /> 
       
      <div className="p-4"> 
        {/* SOLUTION #3: Display category badge */} 
        {/* We use curly braces {} to inject JavaScript variables into JSX */} 
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 
rounded-full mb-2"> 
          {category} 
        </span> 
         
        {/* SOLUTION #4: Display the item title */} 
        <h3 className="text-xl font-bold text-gray-800 mb-2"> 
          {title} 
        </h3> 
         
        {/* SOLUTION #5: Display description, truncated to 100 characters */} 
        {/* .slice(0, 100) takes the first 100 characters of the string */} 
        {/* We add "..." to show there's more text */} 
        <p className="text-gray-600 text-sm mb-3"> 
          {description.slice(0, 100)}... 
        </p> 
         
        <div className="flex items-center justify-between mb-3"> 
          {/* SOLUTION #6: Display condition with dynamic color */} 
          {/* We use a ternary operator (condition ? true : false) to set color based on 
condition */} 
          {/* Like New = green, Good = yellow, Fair = orange */} 
          <div className="flex items-center gap-2"> 
            <span className="text-sm text-gray-500">Condition:</span> 
            <span className={`text-sm font-medium ${ 
              condition === 'Like New' ? 'text-green-600' : 
              condition === 'Good' ? 'text-yellow-600' : 
              'text-orange-600' 
            }`}> 
              {condition} 
            </span> 
          </div> 
        </div> 
         
        {/* SOLUTION #7: Display who posted the item */} 
        <div className="flex items-center gap-2 mb-4"> 
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div> 
          <span className="text-sm text-gray-600">Posted by {owner}</span> 
        </div> 
         
        {/* SOLUTION #8: Button that calls the onTradeRequest function */} 
        {/* onTradeRequest is a FUNCTION passed down from the parent */} 
        {/* When button is clicked, it calls that function */} 
        {/* This is how CHILD communicates back to PARENT */} 
        <button 
          onClick={onTradeRequest} 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 
px-4 rounded-lg transition-colors" 
        > 
          Request Trade 
        </button> 
         
      </div> 
    </div> 
  ); 
} 

 

// ======================================== 
// SECTION 2: CATEGORY FILTER COMPONENT 
// ======================================== 
// This component shows buttons to filter items by category 

// SOLUTION #9: Destructure categories array, activeCategory state, and setter function 
function CategoryFilter({ categories, activeCategory, setActiveCategory }) { 
  // categories = array of category names like ['Electronics', 'Books'] 
  // activeCategory = which category is currently selected 
  // setActiveCategory = function to change the active category 
   
  return ( 
    <div className="flex flex-wrap gap-2 mb-6"> 
       
      {/* SOLUTION #10: "All" button to show all items */} 
      {/* onClick calls setActiveCategory with 'All' */} 
      {/* className changes based on whether 'All' is active (blue) or not (gray) */} 
      <button 
        onClick={() => setActiveCategory('All')} 
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${ 
          activeCategory === 'All'  
            ? 'bg-indigo-600 text-white'  
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
        }`} 
      > 
        All Items 
      </button> 
       
      {/* SOLUTION #11: Map over categories array to create a button for each */} 
      {/* .map() creates a new array by transforming each element */} 
      {/* For each category, we create a button */} 
      {/* key={category} is REQUIRED by React to track each element in the list */} 
      {categories.map(category => ( 
        <button 
          key={category} 
          onClick={() => setActiveCategory(category)} 
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${ 
            activeCategory === category  
              ? 'bg-indigo-600 text-white'  
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
          }`} 
        > 
          {category} 
        </button> 
      ))} 
    </div> 
  ); 
} 

 

// ======================================== 
// SECTION 3: SEARCH BAR COMPONENT 
// ======================================== 
// This component lets users type to search items 

// SOLUTION #12: Destructure searchTerm (current value) and onSearchChange (function to update it) 
function SearchBar({ searchTerm, onSearchChange }) { 
  // searchTerm = what the user has typed so far 
  // onSearchChange = function to call when user types 
   
  return ( 
    <div className="mb-6"> 
      {/* SOLUTION #13: Controlled input */} 
      {/* "Controlled" means React controls the value, not the DOM */} 
      {/* value={searchTerm} - React controls what's displayed */} 
      {/* onChange - when user types, we update the state */} 
      {/* e.target.value is the new text the user typed */} 
      <input 
        type="text" 
        placeholder="Search items..." 
        value={searchTerm} 
        onChange={(e) => onSearchChange(e.target.value)} 
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
focus:ring-2 focus:ring-indigo-600" 
      /> 
    </div> 
  ); 
} 

 

// ======================================== 
// SECTION 4: ADD ITEM FORM COMPONENT 
// ======================================== 
// This component is a form to add new items 

// SOLUTION #14: Receive onAddItem function from parent 
function AddItemForm({ onAddItem }) { 
  // onAddItem = function to call when form is submitted 
   
  // SOLUTION #15: Create state for each form field 
  // Each input needs its own state to be "controlled" 
  // useState returns [currentValue, functionToUpdateIt] 
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [category, setCategory] = useState('Electronics'); // Default value 
  const [condition, setCondition] = useState('Good'); // Default value 
  const [image, setImage] = useState(''); 
   
   
   
  // SOLUTION #16: Handle form submission 
  const handleSubmit = (e) => { 
    // e.preventDefault() stops the page from reloading (default form behavior) 
    e.preventDefault(); 
     
    // Create a new item object with all the form data 
    const newItem = { 
      id: Date.now(), // Quick way to generate unique ID (timestamp) 
      title: title, // Can also write just "title" (shorthand) 
      description: description, 
      category: category, 
      condition: condition, 
      image: image || 'https://via.placeholder.com/400x300', // Use placeholder if no image provided 
      owner: 'Current User', // Hardcoded for now 
      postedDate: new Date().toISOString() // Current date/time 
    }; 
     
    // Call the parent's function and pass the new item up 
    // This is CHILD → PARENT communication 
    onAddItem(newItem); 
     
    // Reset the form fields to empty 
    setTitle(''); 
    setDescription(''); 
    setImage(''); 
  }; 
   
   
   
  return ( 
    <div className="bg-white rounded-lg shadow-md p-6 mb-8"> 
      <h2 className="text-2xl font-bold mb-4">List New Item</h2> 
       
      {/* SOLUTION #17: Form with onSubmit handler */} 
      {/* When form is submitted (user clicks button or presses Enter), call handleSubmit 
*/} 
      <form onSubmit={handleSubmit}> 
         
        {/* Title Input - CONTROLLED INPUT */} 
        <div className="mb-4"> 
          <label className="block text-gray-700 font-medium mb-2"> 
            Item Title * 
          </label> 
          <input 
            type="text" 
            value={title} // React controls the value 
            onChange={(e) => setTitle(e.target.value)} // Update state when user types 
            required // HTML5 validation - field must be filled 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
focus:outline-none focus:ring-2 focus:ring-indigo-600" 
            placeholder="What are you offering?" 
          /> 
        </div> 
         
        {/* Description Textarea - CONTROLLED INPUT */} 
        <div className="mb-4"> 
          <label className="block text-gray-700 font-medium mb-2"> 
            Description * 
          </label> 
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
            rows="3" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
focus:outline-none focus:ring-2 focus:ring-indigo-600" 
            placeholder="Describe your item..." 
          /> 
        </div> 
         
        {/* Category and Condition Dropdowns */} 
        <div className="grid grid-cols-2 gap-4 mb-4"> 
          <div> 
            <label className="block text-gray-700 font-medium mb-2"> 
              Category 
            </label> 
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
focus:outline-none focus:ring-2 focus:ring-indigo-600" 
            > 
              <option>Electronics</option> 
              <option>Books</option> 
              <option>Clothing</option> 
              <option>Sports</option> 
              <option>Tools</option> 
              <option>Home Goods</option> 
            </select> 
          </div> 
           
          <div> 
            <label className="block text-gray-700 font-medium mb-2"> 
              Condition 
            </label> 
            <select 
              value={condition} 
              onChange={(e) => setCondition(e.target.value)} 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
focus:outline-none focus:ring-2 focus:ring-indigo-600" 
            > 
              <option>Like New</option> 
              <option>Good</option> 
              <option>Fair</option> 
            </select> 
          </div> 
        </div> 
         
        {/* Image URL Input */} 
        <div className="mb-4"> 
          <label className="block text-gray-700 font-medium mb-2"> 
            Image URL 
          </label> 
          <input 
            type="text" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
focus:outline-none focus:ring-2 focus:ring-indigo-600" 
            placeholder="https://example.com/image.jpg" 
          /> 
        </div> 
         
        {/* Submit Button */} 
        <button 
          type="submit" 
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 
px-4 rounded-lg transition-colors" 
        > 
          List Item for Trade 
        </button> 
         
      </form> 
    </div> 
  ); 
} 

 

// ======================================== 
// SECTION 5: MAIN APP COMPONENT 
// ======================================== 
// This is the PARENT component that manages all state 
// Think of it as the "brain" - it holds the data and passes it down 

function BarterApp() { 
   
  // ============================================ 
  // STATE MANAGEMENT 
  // ============================================ 
   
  // SOLUTION #18: State for all items with sample data 
  // This is an array of objects, each object is one item 
  const [items, setItems] = useState([ 
    { 
      id: 1, 
      title: 'iPhone 12', 
      description: 'Gently used iPhone 12, 128GB, blue color. Works perfectly, minor scratches on back.', 
      category: 'Electronics', 
      condition: 'Good', 
      image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400', 
      owner: 'John Doe', 
      postedDate: '2024-01-15' 
    }, 
    { 
      id: 2, 
      title: 'React Programming Book', 
      description: 'Learn React from scratch. Book is in excellent condition with no markings.', 
      category: 'Books', 
      condition: 'Like New', 
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400', 
      owner: 'Jane Smith', 
      postedDate: '2024-01-20' 
    }, 
    { 
      id: 3, 
      title: 'Winter Jacket', 
      description: 'Warm winter jacket, size medium. Great for cold weather.', 
      category: 'Clothing', 
      condition: 'Good', 
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', 
      owner: 'Mike Johnson', 
      postedDate: '2024-01-22' 
    } 
  ]); 
   
   
   
  // SOLUTION #19: State for search term (what user types in search bar) 
  const [searchTerm, setSearchTerm] = useState(''); 
   
   
   
  // SOLUTION #20: State for active category (which filter is selected) 
  const [activeCategory, setActiveCategory] = useState('All'); 
   
   
   
  // SOLUTION #21: State for showing/hiding the add item form 
  // Boolean: true = form visible, false = form hidden 
  const [showAddForm, setShowAddForm] = useState(false); 
   
   
   
  // ============================================ 
  // HANDLER FUNCTIONS 
  // ============================================ 
   
  // SOLUTION #22: Function to add a new item to the list 
  const addItem = (newItem) => { 
    // Spread operator (...) keeps all existing items and adds the new one 
    // [newItem, ...items] puts new item at the START of the array 
    setItems([newItem, ...items]); 
    // Close the form after adding 
    setShowAddForm(false); 
  }; 
   
   
   
  // SOLUTION #23: Function to handle trade request 
  // In a real app, this would open a modal or send a notification 
  const handleTradeRequest = (itemId) => { 
    alert(`Trade request sent for item #${itemId}! (This would open a modal in real app)`); 
  }; 
   
   
   
  // ============================================ 
  // FILTERING LOGIC 
  // ============================================ 
   
  // SOLUTION #24: Filter items based on search term AND category 
  // .filter() creates a NEW array with only items that pass the test 
  const filteredItems = items.filter(item => { 
    // Check if item title or description includes the search term 
    // .toLowerCase() makes search case-insensitive 
    // .includes() checks if string contains another string 
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()); 
     
    // Check if item matches selected category (or if 'All' is selected) 
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory; 
     
    // Item must match BOTH search AND category to be included 
    return matchesSearch && matchesCategory; 
  }); 
   
   
   
  // Get unique categories from all items 
  // new Set() removes duplicates, [...] converts back to array 
  const categories = [...new Set(items.map(item => item.category))]; 
   
   
   
  return ( 
    <div className="min-h-screen bg-gray-100"> 
       
      {/* Header */} 
      <header className="bg-indigo-600 text-white py-6 shadow-lg"> 
        <div className="max-w-7xl mx-auto px-4"> 
          <h1 className="text-3xl font-bold">TradeHub - Community Barter</h1> 
          <p className="text-indigo-100 mt-2">Trade items you don't need for things you 
do!</p> 
        </div> 
      </header> 
       
      <div className="max-w-7xl mx-auto px-4 py-8"> 
         
        {/* SOLUTION #25: Button to toggle add form visibility */} 
        {/* onClick flips showAddForm from true to false (or vice versa) */} 
        {/* Button text changes based on showAddForm state */} 
        <div className="mb-6"> 
          <button 
            onClick={() => setShowAddForm(!showAddForm)} 
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 
rounded-lg transition-colors" 
          > 
            {showAddForm ? 'Cancel' : '+ List New Item'} 
          </button> 
        </div> 
         
        {/* SOLUTION #26: Conditional rendering - show form only if showAddForm is true */} 
        {/* && operator: if left side is true, render right side */} 
        {/* If showAddForm is false, nothing renders */} 
        {showAddForm && <AddItemForm onAddItem={addItem} />} 
         
        {/* SOLUTION #27: Pass search props to SearchBar */} 
        {/* searchTerm = current value (data down) */} 
        {/* onSearchChange = function to update it (events up) */} 
        <SearchBar  
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        /> 
         
        {/* SOLUTION #28: Pass category filter props */} 
        {/* categories = array of unique categories */} 
        {/* activeCategory = which one is selected */} 
        {/* setActiveCategory = function to change selection */} 
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        /> 
         
        {/* SOLUTION #29: Display count of filtered items */} 
        {/* .length gives us the number of items in the array */} 
        <p className="text-gray-600 mb-4"> 
          Showing {filteredItems.length} items 
        </p> 
         
        {/* Items Grid */} 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
          {/* SOLUTION #30: Map over filteredItems to create an ItemCard for each */} 
          {/* .map() transforms each item into a component */} 
          {/* We pass ALL the item's data as props to ItemCard */} 
          {filteredItems.map(item => ( 
            <ItemCard 
              key={item.id} // REQUIRED by React to track each item 
              title={item.title} 
              description={item.description} 
              category={item.category} 
              condition={item.condition} 
              image={item.image} 
              owner={item.owner} 
              onTradeRequest={() => handleTradeRequest(item.id)} // Pass function that includes the item ID 
            /> 
          ))} 
        </div> 
         
        {/* SOLUTION #31: Empty state - show message when no items match */} 
        {/* Only renders if filteredItems is empty (length === 0) */} 
        {filteredItems.length === 0 && ( 
          <div className="text-center py-12"> 
            <p className="text-gray-500 text-lg">No items found matching your criteria</p> 
            <button 
              onClick={() => { 
                setSearchTerm(''); // Clear search 
                setActiveCategory('All'); // Reset category to All 
              }} 
              className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium" 
            > 
              Clear Filters 
            </button> 
          </div> 
        )} 
         
      </div> 
    </div> 
  ); 
} 

export default BarterApp; 

 

// ======================================== 
// KEY CONCEPTS SUMMARY 
// ======================================== 
/* 

 

1. PROPS (Data flows DOWN from parent to child) 

   - Like function parameters 

   - Read-only (child can't change them) 

   - Example: <ItemCard title="iPhone" /> 

 

2. STATE (Component's memory) 

   - Use useState() to create state 

   - Changing state causes re-render 

   - Example: const [count, setCount] = useState(0) 

 

3. CALLBACKS (Events flow UP from child to parent) 

   - Pass functions as props 

   - Child calls them when something happens 

   - Example: <Button onClick={handleClick} /> 

 

4. CONTROLLED INPUTS 

   - React controls the value, not DOM 

   - value={state} + onChange={setState} 

   - Always in sync with state 

 

5. ARRAY METHODS 

   - .map() - transform each item (for rendering lists) 

   - .filter() - keep only items that pass test 

   - .slice() - get portion of array/string 

 

6. CONDITIONAL RENDERING 

   - {condition && <Component />} - render if true 

   - {condition ? <A /> : <B />} - render A or B 

    

7. EVENT HANDLERS 

   - onClick={() => doSomething()} - arrow function 

   - onClick={doSomething} - function reference 

   - Don't do: onClick={doSomething()} - calls immediately! 

 

8. KEY PROP 

   - Required when mapping arrays 

   - Must be unique 

   - Helps React track which items changed 

 

*/ 
