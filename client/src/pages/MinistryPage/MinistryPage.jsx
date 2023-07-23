import { useParams } from "react-router-dom"

const MinistryPage = () => {

    const ministryId = useParams()

    return (
        <div>
            <h1>{ministryId.id}</h1>
        </div>
    )
}

export default MinistryPage