import { CardProps } from "@/interfaces";

const Card = ({title, content}: CardProps) =>{
    return(
        <div className="border rounded-lg shadow-md p-4 bg-white">
            <h1 className="text-xl font-semibold mb-2">{title}</h1>
            <p className="text-gray-700">{content}</p>
        </div>
    );
}

export default Card;