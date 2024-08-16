import "./projectDetails.css";
import Table from "react-bootstrap/Table";
import photo from "../images/zoomImg.png";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'


export function ProjectDetails() {
  return (
    <div className="projectDetails">
      <div className="pDetails-header"></div>
      <div className="details">
        <div className="d-client-info">
          <Table>
            <tbody>
              <tr>
                <td>Client</td>
                <td>Shrushti Malkar</td>
              </tr>
              <tr>
                <td>Bedrooms</td>
                <td>Interiors</td>
              </tr>
              <tr>
                <td>Tags</td>
                <td>Interior, Home</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>24.08.2024</td>
              </tr>
             
            </tbody>
          </Table>
        </div>
        <div className="d-project-info">
        <h2>Minimalist Look for Bedrooms</h2>
<p>
  Discover the serene elegance of minimalist bedroom design. Embrace simplicity with clean lines, neutral tones, and functional furniture that promotes a calming and organized space. Minimalist bedrooms are designed to be both stylish and practical, focusing on essential elements to create a tranquil retreat from the hustle and bustle of daily life.
  <br />
  
  <br />
  Whether you prefer a modern aesthetic or a touch of classic elegance, the minimalist approach can be tailored to suit your personal style. Transform your bedroom into a peaceful sanctuary with thoughtful design choices that emphasize both form and function.
</p>

        </div>
      </div>
      <div className="zoomRoom">
      <InnerImageZoom src={photo} />
      </div>
    </div>
  );
}
