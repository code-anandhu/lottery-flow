import BroadcastForm from "../../components/broadcast/BroadcastForm";
import MessagePreview from "../../components/broadcast/MessagePreview";

const Broadcast = () => {

    return (

        <div className="grid gap-6 lg:grid-cols-3">

            <div className="lg:col-span-2">

                <BroadcastForm />

            </div>

            <div>

                <MessagePreview />

            </div>

        </div>

    );

};

export default Broadcast;