"use client";
// import type { Metadata } from "next";

// export const metadata : Metadata = {
//   title: "How BYD expand to europe",
//   description: `BYD, a leading Chinese electric vehicle manufacturer, has expanded to
//           Europe to tap into the continent's rapidly growing demand for
//           sustainable transportation. `,
//   viewport: "width=device-width, initial-scale=1",
// };

// import Image from "next/image";

export default function ElectricCar(props) {
  return (
    <div>
      <h1> BYD leading electric cars </h1>
      <h2> How BYD expand to europe </h2>
      <hr></hr>
      <section>
        <img
          src="https://images.unsplash.com/photo-1580895456895-cfdf02e4c23f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2l0eSUyMG5pZ2h0fGVufDB8fDB8fHww"
          width="200"
          height={"300"}
          alt="go to the city at night"
          title="go to the city at night"
        />
      </section>
      <section>
        <p>
          BYD, a leading Chinese electric vehicle manufacturer, has expanded to
          Europe to tap into the continent's rapidly growing demand for
          sustainable transportation. Europe has set ambitious targets for
          reducing carbon emissions, and governments are offering incentives to
          accelerate the adoption of electric vehicles, making it an attractive
          market for EV companies.
        </p>
        <p>
          Entering the European market allows BYD to diversify its customer base
          and reduce reliance on the domestic Chinese market. By establishing a
          presence in Europe, BYD can compete with established automotive brands
          and showcase its advanced technology and affordable electric vehicles
          to a broader audience.
        </p>
        <p>
          Additionally, BYD's expansion into Europe supports its global growth
          strategy and enhances its brand recognition worldwide. By
          participating in the European EV market, BYD can form strategic
          partnerships, invest in local infrastructure, and contribute to the
          transition towards greener mobility solutions across the region.
        </p>
      </section>
    </div>
  );
}
