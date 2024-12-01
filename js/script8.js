   // Dropdown functionality
   const dropdownButton = document.getElementById('dropdownButton');
   const dropdownMenu = document.getElementById('dropdownMenu');
   
   dropdownButton.addEventListener('click', () => {
     dropdownMenu.classList.toggle('hidden');
   });
   
   // Show Organic Farming Products
   function showOrganicFarming() {
     const productGrid = document.getElementById('productGrid');
     productGrid.innerHTML = `
       <div class="bg-white p-4 border border-gray-200">
         <img src="../assets/1.jpg" alt="Fertilizers Image" class="w-full h-40 object-cover mb-4" />
         <h2 class="text-xl font-bold mb-2">Fertilizers</h2>
         <p class="text-gray-700 mb-4">Organic fertilizers for your crops.</p>
         <button class="bg-green-500 text-white p-2 w-full">Buy</button>
       </div>
       <div class="bg-white p-4 border border-gray-200">
         <img src="../assets/5.jpg" alt="Crop Selection Image" class="w-full h-40 object-cover mb-4" />
         <h2 class="text-xl font-bold mb-2">seeds</h2>
         <p class="text-gray-700 mb-4">Choose the best seeds for organic farming.</p>
         <button class="bg-green-500 text-white p-2 w-full">Buy</button>
       </div>
     `;
   }
   // Show Aqua Farming Products
   function showAquaFarming() {
     const productGrid = document.getElementById('productGrid');
     productGrid.innerHTML = `
       <div class="bg-white p-4 border border-gray-200">
         <img src="../assets/8.jpg" alt="Food Selection Image" class="w-full h-40 object-cover mb-4" />
         <h2 class="text-xl font-bold mb-2">Food Product</h2>
         <p class="text-gray-700 mb-4">Best food product for aqua farming.</p>
         <button class="bg-green-500 text-white p-2 w-full">Buy</button>
       </div>
       <div class="bg-white p-4 border border-gray-200">
         <img src="../assets/7.jpg" alt="Equipment Image" class="w-full h-40 object-cover mb-4" />
         <h2 class="text-xl font-bold mb-2">Equipment</h2>
         <p class="text-gray-700 mb-4">High-quality equipment for aqua farming.</p>
         <button class="bg-green-500 text-white p-2 w-full">Buy</button>
       </div>
     `;
   }
   
   // Show Dairy Farming Products
   function showDairyFarming() {
     const productGrid = document.getElementById('productGrid');
     productGrid.innerHTML = `
       <div class="bg-white p-4 border border-gray-200">
         <img src="../assets/3.jpg" alt="Food Selection Image" class="w-full h-40 object-cover mb-4" />
         <h2 class="text-xl font-bold mb-2">Food product</h2>
         <p class="text-gray-700 mb-4">Best food selection for dairy farming.</p>
         <button class="bg-green-500 text-white p-2 w-full">Buy</button>
       </div>
       <div class="bg-white p-4 border border-gray-200">
         <img src="../assets/9.jpg" alt="Milk Shakes Image" class="w-full h-40 object-cover mb-4" />
         <h2 class="text-xl font-bold mb-2">cheese</h2>
         <p class="text-gray-700 mb-4">Delicious cheese from dairy farming.</p>
         <button class="bg-green-500 text-white p-2 w-full">Buy</button>
       </div>
     `;
   }
   
   // Show Poultry Farming Products
   function showPoultryFarming() {
     const productGrid = document.getElementById('productGrid');
     productGrid.innerHTML = `
       <div class="bg-white p-4 border border-gray-200">
         <img src="../assets/10.jpg" alt="Food Selection Image" class="w-full h-40 object-cover mb-4" />
         <h2 class="text-xl font-bold mb-2">Eggs</h2>
         <p class="text-gray-700 mb-4">Best Eggs from poultry farm.</p>
         <button class="bg-green-500 text-white p-2 w-full">Buy</button>
       </div>
       <div class="bg-white p-4 border border-gray-200">
         <img src="../assets/downloadcock.jpg" alt="Equipment Image" class="w-full h-40 object-cover mb-4" />
         <h2 class="text-xl font-bold mb-2">Equipment</h2>
         <p class="text-gray-700 mb-4">High-quality equipment for poultry farming.</p>
         <button class="bg-green-500 text-white p-2 w-full">Buy</button>
       </div>
       <div class="bg-white p-4 border border-gray-200">
         <img src="../assets/eggsandchicken.jpg" alt="Eggs and Chicken Sale Image" class="w-full h-40 object-cover mb-4" />
         <h2 class="text-xl font-bold mb-2">Eggs and Chicken Sale</h2>
         <p class="text-gray-700 mb-4">Fresh eggs and chicken for sale.</p>
         <button class="bg-green-500 text-white p-2 w-full">Buy</button>
       </div>
     `;
   }
   
   // Show Melittieculture Farming Products
   function showMelittiecultureFarming() {
     const productGrid = document.getElementById('productGrid');
     productGrid.innerHTML = `
       <div class="bg-white p-4 border border-gray-200">
         <img src="../assets/honey.jpg" alt="Melittieculture Food Production Image" class="w-full h-40 object-cover mb-4" />
         <h2 class="text-xl font-bold mb-2">Food Production</h2>
         <p class="text-gray-700 mb-4">Best food honey from melittieculture farm.</p>
         <button class="bg-green-500 text-white p-2 w-full">Buy</button>
       </div>
       <div class="bg-white p-4 border border-gray-200">
         <img src="../assets/Wood.jpg" alt="Melittieculture Product 2" class="w-full h-40 object-cover mb-4" />
         <h2 class="text-xl font-bold mb-2">Melittieculture Product 2</h2>
         <p class="text-gray-700 mb-4">best equipment for bees keeping.</p>
         <button class="bg-green-500 text-white p-2 w-full">Buy</button>
       </div>
       <div class="bg-white p-4 border border-gray-200">
         <img src="../assets/honey.jpg" alt="Melittieculture Product 3" class="w-full h-40 object-cover mb-4" />
         <h2 class="text-xl font-bold mb-2">Melittieculture Product 3</h2>
         <p class="text-gray-700 mb-4">best bees keeping container.</p>
         <button class="bg-green-500 text-white p-2 w-full">Buy</button>
       </div>
     `;
   }
   
   // Show Sericulture Farming Products
   function showSericultureFarming() {
     const productGrid = document.getElementById('productGrid');
     productGrid.innerHTML = `
       <div class="bg-white p-4 border border-gray-200">
         <img src="../assets/mulberry.jpg" alt="Sericulture Food Production Image" class="w-full h-40 object-cover mb-4" />
         <h2 class="text-xl font-bold mb-2">Food Production</h2>
         <p class="text-gray-700 mb-4">Best food production for sericulture farming.</p>
         <button class="bg-green-500 text-white p-2 w-full">Buy</button>
       </div>
       <div class="bg-white p-4 border border-gray-200">
         <img src="../assets/rearing.jpg" class="w-full h-40 object-cover mb-4" />
         <h2 class="text-xl font-bold mb-2">Sericulture Product 2</h2>
         <p class="text-gray-700 mb-4">Rearning trays for sericulture.</p>
         <button class="bg-green-500 text-white p-2 w-full">Buy</button>
       </div>
     `;
   }
    