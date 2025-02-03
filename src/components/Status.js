const Stats = () => {
    const stats = [
      { label: "Users", value: "10,000+" },
      { label: "Positive Feedback", value: "3000+" },
      { label: "Countries", value: "20+" },
      { label: "Engaged Users", value: "1000+" },
    ];
  
    return (
      <section className="bg-theme-light text-white py-10 font-bold font-montserrat">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold">{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Stats;
  