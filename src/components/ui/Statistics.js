import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import {
  FaRegHandshake,
  FaDonate,
  FaHandsHelping,
} from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";

const Statistics = () => {
  const [stats, setStats] = useState({
    volunteers: null,
    donations: null,
    teams: null,
    partners: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showRupee, setShowRupee] = useState(false);

  useEffect(() => {
    // Simulating an API call
    const fetchData = async () => {
      try {
        const response = await fetch("/api/stats");
        if (!response.ok) throw new Error("Error fetching data");

        const data = await response.json();
        setStats({
          volunteers: data.volunteers || 0,
          donations: data.donations || 0,
          teams: data.teams || 0,
          partners: data.partners || 0,
        });
      } catch (error) {
        setError(true);
        setStats({ volunteers: 0, donations: 0, teams: 0, partners: 0 });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderCount = (value) => {
    return loading ? (
      <CountUp start={0} end={1000} duration={5} suffix="+" />
    ) : (
      <CountUp start={0} end={value || 0} duration={2.75} />
    );
  };

  return (
    <div className="py-16 bg-gradient-to-br from-green-200 to-blue-200 text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Volunteer Stat */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
            <MdOutlineGroups className="mx-auto text-6xl text-green-700 mb-4" />
            <h3 className="text-xl font-semibold">Volunteers</h3>
            <p className="text-3xl font-bold">{renderCount(stats.volunteers)}</p>
            <p className="mt-2 text-gray-600">Dedicated individuals helping us make a difference.</p>
          </div>

          {/* Donations Stat */}
          <div 
            className="p-6 bg-gray-50 rounded-lg shadow-md text-center"
            onMouseEnter={() => setShowRupee(true)} 
            onMouseLeave={() => setShowRupee(false)}
          >
            <FaDonate className="mx-auto text-6xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold">Donations</h3>
            <p className="text-3xl font-bold">
              {renderCount(stats.donations)} {showRupee && '₹'}
            </p>
            <p className="mt-2 text-gray-600">Generous contributions from our supporters.</p>
          </div>

          {/* Teams Stat */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
            <FaHandsHelping className="mx-auto text-6xl text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold">Teams</h3>
            <p className="text-3xl font-bold">{renderCount(stats.teams)}</p>
            <p className="mt-2 text-gray-600">Teams working tirelessly for our cause.</p>
          </div>

          {/* Partners Stat */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
            <FaRegHandshake className="mx-auto text-6xl text-red-600 mb-4" />
            <h3 className="text-xl font-semibold">Partners</h3>
            <p className="text-3xl font-bold">{renderCount(stats.partners)}</p>
            <p className="mt-2 text-gray-600">Collaborating organizations supporting our mission.</p>
          </div>
        </div>

        {/* Error Handling */}
        {error && (
          <p className="text-red-600 mt-6">
            Failed to load statistics. Showing default values.
          </p>
        )}
      </div>
    </div>
  );
};

export default Statistics;
