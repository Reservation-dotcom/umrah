const hotels3Star = [
  {
    id: "emaar-diwan-al-sud",
    city: "Makkah",
    name: "Emaar Diwan Al Sud",
    distance: "900m from Haram (Ajyad Al-Sud)",
    locationNote: "Budget Emaar property",
    amenities: ["Free Wi-Fi", "A/C Rooms", "24h Front Desk", "Family Rooms", "Shuttle 24/7"],
    reviewNote: "Budget pilgrim option near the Haram",
    images: [
      "https://www.makkahtour.co.uk/images/hotels/makkah/emaar-diwan-al-sud/deluxe-hotel-room.webp",
      "https://www.makkahtour.co.uk/images/hotels/makkah/emaar-diwan-al-sud/family-room.webp",
      "https://www.makkahtour.co.uk/images/hotels/makkah/emaar-diwan-al-sud/grand-deluxe-room.webp",
      "https://www.makkahtour.co.uk/images/hotels/makkah/emaar-diwan-al-sud/luxury-room.webp",
    ],
  },
  {
    id: "grand-zowar-hotel",
    city: "Madinah",
    name: "Grand Zowar Hotel",
    distance: "9 min walk to Nabawi (600m)",
    locationNote: "Affordable, attentive staff",
    amenities: ["Free Wi-Fi", "Restaurant", "24h Front Desk", "Family Rooms"],
    reviewNote: 'Mixed · "Affordable rooms, extra-attentive helpful staff, welcoming"',
    images: [
      "https://www.makkahtour.co.uk/images/hotels/madinah/grand-zowar-hotel/charming-hotel-exterior.webp",
      "https://www.makkahtour.co.uk/images/hotels/madinah/grand-zowar-hotel/comfortable-hotel-room-with-queen-bed.webp",
      "https://www.makkahtour.co.uk/images/hotels/madinah/grand-zowar-hotel/deluxe-bed-in-luxurious-hotel-suite.webp",
      "https://www.makkahtour.co.uk/images/hotels/madinah/grand-zowar-hotel/luxury-hotel-sitting-hall.webp",
    ],
  },
];

const hotels4Star = [
  {
    id: "infinity-hotel-makkah",
    city: "Makkah",
    name: "Infinity Hotel Makkah",
    distance: "10 min walk to Haram (750 m)",
    locationNote: "Walking distance on the hill",
    amenities: ["Free Wi-Fi", "Restaurant", "24h Front Desk", "Spacious Rooms"],
    reviewNote: 'Good value · "Excellent location, spacious clean rooms, cooperative staff"',
    images: [
      "https://www.makkahtour.co.uk/images/hotels/makkah/infinity-hotel-makkah/comfortable-guest-room.webp",
      "https://www.makkahtour.co.uk/images/hotels/makkah/infinity-hotel-makkah/front-entrance-design.webp",
      "https://www.makkahtour.co.uk/images/hotels/makkah/infinity-hotel-makkah/deluxe-bedroom-suite.webp",
      "https://www.makkahtour.co.uk/images/hotels/makkah/infinity-hotel-makkah/spacious-guestroom.webp",
    ],
  },
  {
    id: "mias-hotel-madinah",
    city: "Madinah",
    name: "Mias Hotel Madinah",
    distance: "7 min walk to Nabawi",
    locationNote: "Central; feels 5-star",
    amenities: ["Free Wi-Fi", "Restaurant", "Business Centre", "Family Rooms"],
    reviewNote: '8.5/10 · "Great location, spacious clean rooms, amazing restaurant food"',
    images: [
      "https://www.makkahtour.co.uk/images/hotels/madinah/mias-hotel-madinah/cozy-hotel-bedroom.webp",
      "https://www.makkahtour.co.uk/images/hotels/madinah/mias-hotel-madinah/hotel-lobby-sitting-area.webp",
      "https://www.makkahtour.co.uk/images/hotels/madinah/mias-hotel-madinah/modern-bedroom-with-king-bed.webp",
      "https://www.makkahtour.co.uk/images/hotels/madinah/mias-hotel-madinah/outer-view-from-room.webp",
    ],
  },
];

const hotels5Star = [
  {
    id: "makarem-ajyad-makkah",
    city: "Makkah",
    name: "Makarem Ajyad Makkah",
    distance: "5 min walk to Haram (400m)",
    locationNote: "Best-value 5★ near the Mosque",
    amenities: ["Free Wi-Fi", "24h Room Service", "Starbucks", "Gift Shops"],
    reviewNote: '8.4/10 · 7,413 reviews · "Clean, helpful staff, very good breakfast"',
    images: [
      "https://www.makkahtour.co.uk/images/hotels/makkah/makarem-ajyad-makkah/cozy-luxury-bedroom.webp",
      "https://www.makkahtour.co.uk/images/hotels/makkah/makarem-ajyad-makkah/hotel-frontview-luxury.webp",
      "https://www.makkahtour.co.uk/images/hotels/makkah/makarem-ajyad-makkah/deluxe-bedroom-suite.webp",
      "https://www.makkahtour.co.uk/images/hotels/makkah/makarem-ajyad-makkah/grand-sitting-hall.webp",
    ],
  },
  {
    id: "dar-al-eiman-al-haram-madinah",
    city: "Madinah",
    name: "Dar Al Eiman Al Haram Madinah",
    distance: "~3 min walk to Nabawi (200m)",
    locationNote: "Pilgrim-focused, well-managed",
    amenities: ["Free Wi-Fi", "Restaurant", "24h Front Desk", "Family Rooms"],
    reviewNote: 'Value pick · "Unbeatable location, friendly staff, spacious comfortable rooms"',
    images: [
      "https://www.makkahtour.co.uk/images/hotels/madinah/dar-al-eiman-al-haram-madinah/modern-hotel-front.webp",
      "https://www.makkahtour.co.uk/images/hotels/madinah/dar-al-eiman-al-haram-madinah/artistic-hotel-guest-bedroom.webp",
      "https://www.makkahtour.co.uk/images/hotels/madinah/dar-al-eiman-al-haram-madinah/stylish-hotel-bedroom-design.webp",
      "https://www.makkahtour.co.uk/images/hotels/madinah/dar-al-eiman-al-haram-madinah/stylish-dining-area.webp",
    ],
  },
];

const hotelsByStar = {
  3: hotels3Star,
  4: hotels4Star,
  5: hotels5Star,
};

export function getPackageHotels(pkg) {
  const templates = hotelsByStar[pkg.starCount] || hotels3Star;
  return templates.map((hotel) => ({
    ...hotel,
    nights: hotel.city === "Makkah" ? pkg.makkahDays : pkg.madinahDays,
    starCount: pkg.starCount,
  }));
}
