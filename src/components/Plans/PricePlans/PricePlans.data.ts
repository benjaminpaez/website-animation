import { PricesPlansData } from "./PricePlans.types";

export const dataPricePlans: PricesPlansData = [
  {
    id: 1,
    name: "Basico",
    description:
      "Inicia tu viaje con herramientas esenciales y soporte introductorio experto",
    primary: false,
    prices: [
      {
        id: 1,
        name: "/mes",
        price: "$50.000",
      },
      {
        id: 2,
        name: "/cuatrimestral",
        price: "$170.000",
      },
    ],
    features: [
      {
        id: 1,
        name: "Soporte técnico inicial personalizado",
        active: true,
      },
      {
        id: 2,
        name: "Acceso a funciones esenciales",
        active: true,
      },
      {
        id: 3,
        name: "Actualizaciones regulares",
        active: false,
      },
      {
        id: 4,
        name: "Recursos educativos",
        active: false,
      },
      {
        id: 5,
        name: "Comunidad activa para intercambio de ideas",
        active: false,
      },
    ],
  },
  {
    id: 2,
    name: "Avanzado",
    description:
      "Optimiza tu rendimiento con funciones avanzadas y asesoramiento personalizado",
    primary: true,
    prices: [
      {
        id: 1,
        name: "/mes",
        price: "$80.000",
      },
      {
        id: 2,
        name: "/cuatrimestral",
        price: "$300.000",
      },
    ],
    features: [
      {
        id: 1,
        name: "Asesoramiento personalizado",
        active: true,
      },
      {
        id: 2,
        name: "Funciones avanzadas para un control total",
        active: true,
      },
      {
        id: 3,
        name: "Actualizaciones prioritarias",
        active: true,
      },
      {
        id: 4,
        name: "Sesiones de entrenamiento exclusivas",
        active: false,
      },
      {
        id: 5,
        name: "Integración con herramientas externas",
        active: false,
      },
    ],
  },
  {
    id: 3,
    name: "Premium",
    description:
      "Experimenta con características exclusivas, asistencia y actualizaciones avanzadas",
    primary: false,
    prices: [
      {
        id: 1,
        name: "/mes",
        price: "$100.000",
      },
      {
        id: 2,
        name: "/cuatrimestral",
        price: "$360.000",
      },
    ],
    features: [
      {
        id: 1,
        name: "Soporte prioritario con asistencia 24/7",
        active: true,
      },
      {
        id: 2,
        name: "Características exclusivas",
        active: true,
      },
      {
        id: 3,
        name: "Acceso anticipado a nuevas funciones",
        active: true,
      },
      {
        id: 4,
        name: "Asesoramiento estratégico",
        active: true,
      },
      {
        id: 5,
        name: "Eventos VIP y networking exclusivo con expertos",
        active: true,
      },
    ],
  },
];
