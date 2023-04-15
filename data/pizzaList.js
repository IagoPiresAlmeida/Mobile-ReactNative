import { ImageProps } from "react-native";

export interface Pizza{
    name: String;
    image: ImageProps["source"];
    descrição: String;
}

export const pizzaList: Pizza[] =[

    {
        name: "Pizza de Mussarela",
        image: "pizza1",
        descrição:""
    },
    {
        name: "Pizza de Calabresa",
        image: "pizza2",
        descrição:"Pizza com calabresa e cebola"
    },
    {
        name: "Pizza de Frango com Catupiry",
        image: "pizza3",
        descrição:""
    },
    {
        name: "Pizza de Portuguesa",
        image: "pizza4",
        descrição:""
    },
    {
        name: "Pizza de Pepperoni",
        image: "pizza5",
        descrição:""
    },
    {
        name: "Pizza de Margherita",
        image: "pizza6",
        descrição:""
    },
    {
        name: "Pizza de Quatro Queijos",
        image: "pizza7",
        descrição:""
    },
    {
        name: "Pizza de Bacon",
        image: "pizza8",
        descrição:""
    },
    {
        name: "Pizza de Atum",
        image: "pizza9",
        descrição:""
    },
    {
        name: "Pizza de Alho",
        image: "pizza10",
        descrição:""
    },
    {
        name: "Pizza de Banana com Canela",
        image: "pizza11",
        descrição:""
    },
    {
        name: "Pizza de Chocolate",
        image: "pizza12",
        descrição:""
    },
];
