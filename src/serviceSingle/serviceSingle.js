import "./serviceSingle.css";



export function ServiceSingle() {
  return (
    <div className="serviceSingle">
      <div className="serviceS-header">
        <h1>
          Service Single<p>Home / Service Single</p>
        </h1>
      </div>
      <div className="experience">
            <div className="years">
                <p className="year num">12</p>
                <p>Years Of Experience</p>
            </div>
            <div className="s-project">
                <p className="sp num">85</p>
                <p>Success Project</p>
            </div>
            <div className="a-project">
                <p className="ap num">15</p>
                <p>Active Project</p>
            </div>
            <div className="customers">
                <p className="cust num">95</p>
                <p>Happy Customers</p>
            </div>
        </div>
    </div>
  );
}
