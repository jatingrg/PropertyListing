document.addEventListener('DOMContentLoaded', function() {
  // Property type options configuration
  const propertyOptions = {
      flat: ['1 Bhk', '2 Bhk', '3 Bhk', '4 Bhk', '5 Bhk', '5+ Bhk'],
      house: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK', 'Independent', 'Duplex'],
      
  };

  // Main dropdown functionality
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
      const btn = dropdown.querySelector('.dropdown-btn');
      const content = dropdown.querySelector('.dropdown-content');
      
      btn.addEventListener('click', function(e) {
          e.stopPropagation();
          
          // Close all other dropdowns
          document.querySelectorAll('.dropdown-content').forEach(dd => {
              if (dd !== content) {
                  dd.style.display = 'none';
              }
          });
          
          // Toggle current dropdown
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
  });
  
  // Close dropdowns when clicking outside
  window.addEventListener('click', function() {
      document.querySelectorAll('.dropdown-content').forEach(dd => {
          dd.style.display = 'none';
      });
  });

  // Property type selection handler
  const propertyTypeLinks = document.querySelectorAll('.property-type .dropdown-content a');
  const bhkDropdown = document.querySelector('.bhk-dropdown');
  const bhkDropdownBtn = bhkDropdown.querySelector('.dropdown-btn');
  const bhkOptionsContainer = document.getElementById('bhk-options');
  
  propertyTypeLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const type = this.getAttribute('data-type');
          const displayText = this.textContent;
          
          // Update property type button text
          document.querySelector('.property-type .dropdown-btn').textContent = displayText + ' ▼';
          
          // Clear previous options
          bhkOptionsContainer.innerHTML = '';
          
          // Add new options based on property type
          propertyOptions[type].forEach(option => {
              const optionElement = document.createElement('a');
              optionElement.href = '#';
              optionElement.textContent = option;
              bhkOptionsContainer.appendChild(optionElement);
          });
          
          // Update BHK dropdown button text
          bhkDropdownBtn.textContent = 'Select ' + (type === 'flat' ? 'BHK' : 'Type') + ' ▼';
          
          // Show BHK dropdown
          bhkDropdown.style.display = 'block';
          
          // Close dropdowns
          document.querySelectorAll('.dropdown-content').forEach(dd => {
              dd.style.display = 'none';
          });
      });
  });
  
  // BHK selection handler
  bhkOptionsContainer.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
          e.preventDefault();
          bhkDropdownBtn.textContent = e.target.textContent + ' ▼';
      }
  });
  
  // Search tab switching
  const searchTabs = document.querySelectorAll('.search-tab');
  searchTabs.forEach(tab => {
      tab.addEventListener('click', function() {
          searchTabs.forEach(t => t.classList.remove('active'));
          this.classList.add('active');
      });
  });
  
  // Navigation tab switching
  const navTabs = document.querySelectorAll('.nav-tabs a');
  navTabs.forEach(tab => {
      tab.addEventListener('click', function(e) {
          e.preventDefault();
          navTabs.forEach(t => t.classList.remove('active'));
          this.classList.add('active');
      });
  });
});