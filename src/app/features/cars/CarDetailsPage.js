import agent from "../../api/agent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CarUser from "./details/CarUser";
import CarHeader from "./details/CarHeader";
import CarTickets from "./details/CarTickets";
import CarHistory from "./details/CarHistory";
import CarTicketHistory from "./details/CarTicketHistory";
import AssignCarModal from "./modal/AssignCarModal";

const CarDetailsPage = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [carUser, setCarUser] = useState(null);
    const [historyList, setHistoryList] = useState(null);
    const [ticketList, setTicketList] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        try {
            const carData = await agent.Cars.Get(id);
            const historyData = await agent.History.GetAllForCar(id);
            const ticketData = await agent.Tickets.GetAllForCar(id);
            setCar(carData);
            setCarUser(carData.user);
            setHistoryList(historyData);
            setTicketList(ticketData)
        } catch (e) {
            console.log(e);
        }
    }

    const handleDissociateUser = () => {
        agent.Cars.DissociateUser(car.id)
            .then(() => {
                setCar(prevState => {
                    return {
                        ...prevState,
                        user: null
                    }
                })
                setCarUser(null);
            })
            .catch(e => console.log(e));
    }

    if (car === null) return <></>;

    return (
        <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
            {showModal && <AssignCarModal closeModal={() => setShowModal(false)} carId={car.id} setUserToCar={user => {
                setCarUser(user);
                setCar(prevState => {
                    return {
                        ...prevState,
                        user
                    }
                })
            }} />}
            <div className="content flex-row-fluid" id="kt_content">
                <div className="d-flex flex-column flex-lg-row">
                    <div className="flex-lg-row-fluid me-lg-15 order-2 order-lg-1 mb-10 mb-lg-0">
                        <CarHeader car={car} />
                        <CarTickets ticketList={ticketList} />
                        <CarTicketHistory />
                        <CarHistory historyList={historyList} />
                    </div>
                    <CarUser car={car} user={carUser} showModal={() => setShowModal(true)} handleDissociateUser={handleDissociateUser} />
                </div>
            </div>
        </div>
    );
}

export default CarDetailsPage;