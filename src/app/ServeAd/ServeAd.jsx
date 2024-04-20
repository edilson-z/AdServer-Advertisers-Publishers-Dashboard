import { NextResponse } from "next/server";

// test data
const adUnit1 = {
  adUnitId: "1",
  type: "image",
  adName: "Flowers",
  adSize: [300, 250],
  adPlacement: ["in-content ads", "sidebar ads", "header ads", "footer ads"],
  destination_url: "http://localhost:3000/ticketPage/news",
  content:
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
  divId: "banner-ad",
};
const adUnit2 = {
  adUnitId: "1",
  type: "video",
  adName: "Flowers",
  adSize: [300, 250],
  adPlacement: ["in-content ads", "sidebar ads", "header ads", "footer ads"],
  destination_url: "http://localhost:3000/ticketPage/news",
  content:
    "https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=600",
  divId: "banner-ad",
};
const adUnit3 = {
  adUnitId: "3",
  type: "video",
  adName: "Flowers",
  adSize: [300, 250],
  adPlacement: ["in-content ads", "sidebar ads", "header ads", "footer ads"],
  destination_url: "http://localhost:3000/ticketPage/news",
  content:
    "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600",
  divId: "banner-ad",
};
const ads = [adUnit1, adUnit2, adUnit3];
const url = ads[0].content;

// Get the ad content 
export async function GET() {
  try {
    return NextResponse.json({ url }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
