export default function chooseColor(context){
    switch (context.toLowerCase()){
        case "grey":
        return {
            backgroundColor:"#F3F4F6",
            color:"#1F2937"
        };
        break;
        case "red":
        return {
            backgroundColor:"#FEE2E2",
            color:"#991B1B"
        };
        break;
        case "yellow":
        return {
            backgroundColor:"#FEF3C7",
            color:"#92400E"
        };
        break;
        case "green":
        return {
            backgroundColor:"#D1FAE5",
            color:"#065F46"
        };
        break;
        case "blue":
        return {
            backgroundColor:"#DBEAFE",
            color:"#1E40AF"
        };
        break;
        case "indigo":
        return {
            backgroundColor:"#F3F4F6",
            color:"#3730A3"
        };
        break;
        case "purple":
        return {
            backgroundColor:"#EDE9FE",
            color:"#5B21B6"
        };
        break;
        case "pink":
        return {
            backgroundColor:"#FCE7F3",
            color:"#9D174D"
        };
        break;
        default:
            return {
            backgroundColor:"#F3F4F6",
            color:"#1F2937"
        };
        break;
    }
}