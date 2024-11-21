// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { counts } from "../utils/data";
// import CountsCard from "../components/cards/CountsCard";
// import WeeklyStatCard from "../components/cards/WeeklyStatCard";
// import CategoryChart from "../components/cards/CategoryChart";
// import AddWorkout from "../components/AddWorkout";
// import WorkoutCard from "../components/cards/WorkoutCard";
// import { addWorkout, getDashboardDetails, getWorkouts } from "../api";

// const Container = styled.div`
//   flex: 1;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   padding: 22px 0px;
//   overflow-y: scroll;
// `;
// const Wrapper = styled.div`
//   flex: 1;
//   max-width: 1400px;
//   display: flex;
//   flex-direction: column;
//   gap: 22px;
//   @media (max-width: 600px) {
//     gap: 12px;
//   }
// `;
// const Title = styled.div`
//   padding: 0px 16px;
//   font-size: 22px;
//   color: ${({ theme }) => theme.text_primary};
//   font-weight: 500;
// `;
// const FlexWrap = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   gap: 22px;
//   padding: 0px 16px;
//   @media (max-width: 600px) {
//     gap: 12px;
//   }
// `;
// const Section = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 0px 16px;
//   gap: 22px;
//   padding: 0px 16px;
//   @media (max-width: 600px) {
//     gap: 12px;
//   }
// `;
// const CardWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px;
//   margin-bottom: 100px;
//   @media (max-width: 600px) {
//     gap: 12px;
//   }
// `;

// const Dashboard = () => {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState();
//   const [buttonLoading, setButtonLoading] = useState(false);
//   const [todaysWorkouts, setTodaysWorkouts] = useState([]);
//   const [workout, setWorkout] = useState(`#Legs
// -Back Squat
// -5 setsX15 reps
// -30 kg
// -10 min`);

//   const dashboardData = async () => {
//     setLoading(true);
//     const token = localStorage.getItem("fittrack-app-token");
//     await getDashboardDetails(token).then((res) => {
//       setData(res.data);
//       console.log(res.data);
//       setLoading(false);
//     });
//   };
//   const getTodaysWorkout = async () => {
//     setLoading(true);
//     const token = localStorage.getItem("fittrack-app-token");
//     await getWorkouts(token, "").then((res) => {
//       setTodaysWorkouts(res?.data?.todaysWorkouts);
//       console.log(res.data);
//       setLoading(false);
//     });
//   };

//   const addNewWorkout = async () => {
//     setButtonLoading(true);
//     const token = localStorage.getItem("fittrack-app-token");
//     await addWorkout(token, { workoutString: workout })
//       .then((res) => {
//         dashboardData();
//         getTodaysWorkout();
//         setButtonLoading(false);
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   };

//   useEffect(() => {
//     dashboardData();
//     getTodaysWorkout();
//   }, []);
//   return (
//     <Container>
//       <Wrapper>
//         <Title>Dashboard</Title>
//         <FlexWrap>
//           {counts.map((item) => (
//             <CountsCard item={item} data={data} />
//           ))}
//         </FlexWrap>

//         <FlexWrap>
//           <WeeklyStatCard data={data} />
//           <CategoryChart data={data} />
//           <AddWorkout
//             workout={workout}
//             setWorkout={setWorkout}
//             addNewWorkout={addNewWorkout}
//             buttonLoading={buttonLoading}
//           />
//         </FlexWrap>

//         <Section>
//           <Title>Todays Workouts</Title>
//           <CardWrapper>
//             {todaysWorkouts.map((workout) => (
//               <WorkoutCard workout={workout} />
//             ))}
//           </CardWrapper>
//         </Section>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Dashboard;




import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { counts } from "../utils/data";
import CountsCard from "../components/cards/CountsCard";
import WeeklyStatCard from "../components/cards/WeeklyStatCard";
import CategoryChart from "../components/cards/CategoryChart";
import AddWorkout from "../components/AddWorkout";
import WorkoutCard from "../components/cards/WorkoutCard";
import { addWorkout, getDashboardDetails, getWorkouts } from "../api";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [workout, setWorkout] = useState(`#Legs
-Back Squat
-5 setsX15 reps
-30 kg
-10 min`);

  // Fetch dashboard details and handle errors
  const dashboardData = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    if (!token) {
      alert("Token is missing. Please login again.");
      setLoading(false);
      return;
    }

    try {
      const res = await getDashboardDetails(token);
      setData(res.data);
      console.log(res.data);
    } catch (err) {
      console.error("Error fetching dashboard data:", err.response || err);
      alert("Failed to fetch dashboard data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch today's workouts and handle errors
  const getTodaysWorkout = async () => {
    setLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    if (!token) {
      alert("Token is missing. Please login again.");
      setLoading(false);
      return;
    }

    try {
      const res = await getWorkouts(token, "");
      setTodaysWorkouts(res?.data?.todaysWorkouts);
      console.log(res.data);
    } catch (err) {
      console.error("Error fetching today's workouts:", err.response || err);
      alert("Failed to fetch today's workouts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Add a new workout and handle errors
  const addNewWorkout = async () => {
    setButtonLoading(true);
    const token = localStorage.getItem("fittrack-app-token");
    if (!token) {
      alert("Token is missing. Please login again.");
      setButtonLoading(false);
      return;
    }

    try {
      await addWorkout(token, { workoutString: workout });
      dashboardData(); // Refresh dashboard data
      getTodaysWorkout(); // Refresh today's workouts
    } catch (err) {
      console.error("Error adding new workout:", err.response || err);
      alert("Failed to add workout. Please try again later.");
    } finally {
      setButtonLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    dashboardData();
    getTodaysWorkout();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
        <FlexWrap>
          {counts.map((item) => (
            <CountsCard item={item} data={data} />
          ))}
        </FlexWrap>

        <FlexWrap>
          <WeeklyStatCard data={data} />
          <CategoryChart data={data} />
          <AddWorkout
            workout={workout}
            setWorkout={setWorkout}
            addNewWorkout={addNewWorkout}
            buttonLoading={buttonLoading}
          />
        </FlexWrap>

        <Section>
          <Title>Todays Workouts</Title>
          <CardWrapper>
            {todaysWorkouts.map((workout) => (
              <WorkoutCard workout={workout} />
            ))}
          </CardWrapper>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
