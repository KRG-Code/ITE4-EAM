document.addEventListener("DOMContentLoaded", () => {
    const employeeTable = document.getElementById("employeeTable");
    const modal = document.getElementById("employeeModal");
    const modalEmployeeName = document.getElementById("modalEmployeeName");
    const modalDetails = document.getElementById("modalDetails");
    const closeModal = document.getElementById("closeModal");
  
    // Dummy Data
    const totalHours = 480; // Example: Total hours logged by all employees this month
    const avgAttendance = 85; // Example: Average attendance rate (in percentage)
    const complianceRate = 92; // Example: Compliance rate (in percentage)
  
    // Populate Records Overview Metrics
    document.getElementById("totalHours").textContent = totalHours;
    document.getElementById("avgAttendance").textContent = `${avgAttendance}%`;
    document.getElementById("complianceRate").textContent = `${complianceRate}%`;
  
    // Sample Employees
    const employees = [
      { id: 1, name: "Alice", hours: 160, adherence: "98%" },
      { id: 2, name: "Bob", hours: 150, adherence: "95%" },
      { id: 3, name: "Charlie", hours: 170, adherence: "100%" },
      { id: 4, name: "Diana", hours: 140, adherence: "85%" },
      { id: 5, name: "Ethan", hours: 130, adherence: "90%" },
    ];
  
    // Populate Employee Table
    employees.forEach(emp => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="border p-2">${emp.id}</td>
        <td class="border p-2">${emp.name}</td>
        <td class="border p-2">${emp.hours}</td>
        <td class="border p-2">${emp.adherence}</td>
        <td class="border p-2">
          <button class="text-blue-500 hover:underline" onclick="openModal('${emp.name}', 'Hours: ${emp.hours}, Adherence: ${emp.adherence}')">
            View
          </button>
        </td>
      `;
      employeeTable.appendChild(row);
    });
  
    // Open Modal
    window.openModal = (name, details) => {
      modalEmployeeName.textContent = name;
      modalDetails.textContent = details;
      modal.classList.remove("hidden");
    };
  
    // Close Modal
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  });
  