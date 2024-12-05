import Layout from "../components/Layout";
import Navbar from "../components/NavBar";
import TaskOverview from "../components/TaskOverview";
import TaskTable from "../components/TaskTable";

const DashBoardPage: React.FC = () => {

    return(
   <div>
   <Layout/>
   <TaskOverview/>
   <TaskTable />


   </div>
    );
}
export default DashBoardPage;