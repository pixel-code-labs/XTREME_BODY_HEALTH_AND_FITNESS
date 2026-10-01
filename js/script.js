// Verified Multi-Branch Data Store
const branchData = {
  downtown: {
    title: "Downtown HQ (Main Branch)",
    address: "124 Central Ave, City Center",
    phone: "+1 (800) 555-0199",
    status: "● Open 24/7",
    amenities: "Sauna, Turf Zone, Heavy Lifting",
    mapUrl: "https://maps.app.goo.gl/fQ7EiaXLN5NbWVif7",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    classes: [
      { time: "06:00 AM", name: "HIIT & Conditioning", trainer: "Alex Rivera" },
      { time: "12:00 PM", name: "Powerlifting Fundamentals", trainer: "Marcus Vance" },
      { time: "06:30 PM", name: "Striking & Boxing Basics", trainer: "Sarah Jenkins" }
    ]
  },
  uptown: {
    title: "Uptown Fitness Hub",
    address: "884 Westlake Blvd, Suite 4",
    phone: "+1 (800) 555-0244",
    status: "● Mon-Sat: 5 AM - 11 PM",
    amenities: "Lap Pool, Recovery Spa, Yoga Studio",
    mapUrl: "https://maps.app.goo.gl/fQ7EiaXLN5NbWVif7",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    classes: [
      { time: "07:00 AM", name: "Vinyasa Flow Yoga", trainer: "Elena Rostova" },
      { time: "01:00 PM", name: "Aqua Cardio & Core", trainer: "Dave Miller" },
      { time: "05:30 PM", name: "Functional Circuit Training", trainer: "Chris Evans" }
    ]
  },
  metro: {
    title: "North Metro Arena",
    address: "350 Metro Plaza North",
    phone: "+1 (800) 555-0311",
    status: "● Open 24/7",
    amenities: "Calisthenics Zone, Field Turf, Recovery Bar",
    mapUrl: "https://maps.app.goo.gl/fQ7EiaXLN5NbWVif7",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    classes: [
      { time: "08:00 AM", name: "Calisthenics & Mobility", trainer: "Leo Zhang" },
      { time: "04:00 PM", name: "Athletic Development", trainer: "Jordan Reed" },
      { time: "07:00 PM", name: "Endurance & Spin", trainer: "Maya Lin" }
    ]
  }
};

// Sync interface with selected location
function updateBranchDetails() {
  const selectedKey = document.getElementById("branchSelect").value;
  const data = branchData[selectedKey];

  // Update card content
  document.getElementById("branchTitle").innerText = data.title;
  document.getElementById("branchAddress").innerText = data.address;
  document.getElementById("branchPhone").innerText = data.phone;
  document.getElementById("branchStatus").innerText = data.status;
  document.getElementById("branchAmenities").innerText = data.amenities;
  document.getElementById("branchImage").src = data.image;

  // Sync Google Maps links
  document.getElementById("mapDirectBtn").href = data.mapUrl;
  document.getElementById("mobileMapBtn").href = data.mapUrl;

  // Sync form branch selection
  document.getElementById("formBranch").value = selectedKey;

  // Populate localized schedule
  const scheduleContainer = document.getElementById("scheduleCards");
  scheduleContainer.innerHTML = data.classes.map(c => `
    <div class="schedule-card bg-zinc-900 border border-zinc-800 p-5 rounded-xl">
      <span class="text-xs font-mono text-red-500 font-bold uppercase tracking-wider">${c.time}</span>
      <h4 class="text-lg font-bold text-white mt-1">${c.name}</h4>
      <p class="text-xs text-zinc-400 mt-2">Instructor: <span class="text-zinc-200">${c.trainer}</span></p>
    </div>
  `).join("");
}

// Event Handler Registration
document.addEventListener("DOMContentLoaded", () => {
  updateBranchDetails();

  document.getElementById("branchSelect").addEventListener("change", updateBranchDetails);

  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been sent to the team.");
    e.target.reset();
  });
});