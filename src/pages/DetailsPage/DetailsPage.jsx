import { useEffect, useState } from "react";
import DetailSection from "../../components/DetailSection/DetailSection";
import Navigation from "../../components/Navigation/Navigation";
import axios from "axios";
function DetailsPage() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const detailData = async () => {
      try {
        const result = await axios.get("/pro_details.json");
        setDetails(result.data);
      } catch (error) {
        console.error(`Unable to fetch data: ${error}`);
      }
    };
    detailData();
  }, []);
  console.log("Details: ", details);
  return (
    <>
      <h1>Details page for the app</h1>
      {/* <Navigation /> */}
      <h2>
        Jenny Le’s portfolio – project breakdown. Process, solutions, and
        results.
      </h2>
      <DetailSection />
    </>
  );
}

export default DetailsPage;
