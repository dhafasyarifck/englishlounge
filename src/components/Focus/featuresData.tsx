import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <path
          opacity="0.5"
          d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
        />
        <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z" />
      </svg>
    ),
    title: "Interactive English Sessions",
    paragraph:
      "Focus on improving speaking and listening skills in a relaxed and engaging environment. Practice real-life conversations to build confidence.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
        />
        <path d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" />
      </svg>
    ),
    title: "Tailored Learning Path",
    paragraph:
      "Each student receives a personalized learning path focusing on their needs. Whether it’s grammar, vocabulary, or fluency, we ensure your growth.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 30C22.75 30 25 32.25 25 35C25 37.75 22.75 40 20 40C17.25 40 15 37.75 15 35C15 32.25 17.25 30 20 30ZM35 30C37.75 30 40 32.25 40 35C40 37.75 37.75 40 35 40C32.25 40 30 37.75 30 35C30 32.25 32.25 30 35 30ZM35 15C37.75 15 40 17.25 40 20C40 22.75 37.75 25 35 25C32.25 25 30 22.75 30 20C30 17.25 32.25 15 35 15Z"
        />
        <path d="M20 15C22.75 15 25 17.25 25 20C25 22.75 22.75 25 20 25C17.25 25 15 22.75 15 20C15 17.25 17.25 15 20 15ZM20 0C22.75 0 25 2.25 25 5C25 7.75 22.75 10 20 10C17.25 10 15 7.75 15 5C15 2.25 17.25 0 20 0ZM5 30C7.75 30 10 32.25 10 35C10 37.75 7.75 40 5 40C2.25 40 0 37.75 0 35C0 32.25 2.25 30 5 30ZM5 15C7.75 15 10 17.25 10 20C10 22.75 7.75 25 5 25C2.25 25 0 22.75 0 20C0 17.25 2.25 15 5 15ZM5 0C7.75 0 10 2.25 10 5C10 7.75 7.75 10 5 10C2.25 10 0 7.75 0 5C0 2.25 2.25 0 5 0ZM35 0C37.75 0 40 2.25 40 5C40 7.75 37.75 10 35 10C32.25 10 30 7.75 30 5C30 2.25 32.25 0 35 0Z" />
      </svg>
    ),
    title: "Cultural Immersion Activities",
    paragraph:
      "Join activities that immerse you in the English-speaking world, from discussions about movies to cultural events, helping you learn faster and with more context.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="42" viewBox="0 0 40 42" className="fill-current">
        <path
          opacity="0.5"
          d="M31.8943 25.3303C34.1233 25.3303 36.1497 26.1409 37.5682 27.762L39.1464 26.1839C39.4614 25.8689 39.9999 26.092 39.9999 26.5374V32.8068C39.9999 33.1502 39.7148 33.4353 39.3714 33.4353H33.1021C32.6567 33.4353 32.4337 32.8968 32.7487 32.5818L34.4071 30.9234C33.4457 29.9015 32.2181 29.2745 30.8571 29.1168C30.453 32.0768 27.9361 34.4353 24.8877 34.4353C21.5511 34.4353 18.8877 31.7719 18.8877 28.4353C18.8877 25.0987 21.5511 22.4353 24.8877 22.4353C27.2685 22.4353 29.3391 23.7205 30.4074 25.6846C30.9085 25.4266 31.3875 25.3303 31.8943 25.3303ZM6.62866 14.9685C9.4654 14.9685 11.7558 17.2589 11.7558 20.0956C11.7558 22.9324 9.4654 25.2228 6.62866 25.2228C3.79189 25.2228 1.5015 22.9324 1.5015 20.0956C1.5015 17.2589 3.79189 14.9685 6.62866 14.9685ZM1.5015 31.3066C1.5015 28.2414 6.62866 26.315 6.62866 26.315C9.61418 26.315 11.5744 28.2414 11.7558 31.3066H1.5015Z"
        />
        <path d="M20 0C23.683 0 26.6667 2.98366 26.6667 6.66667C26.6667 10.3497 23.683 13.3333 20 13.3333C16.317 13.3333 13.3334 10.3497 13.3334 6.66667C13.3334 2.98366 16.317 0 20 0ZM20 18.8889C23.9277 18.8889 28.4445 20.7778 28.4445 24.4444V26.6667H11.5556V24.4444C11.5556 20.7778 16.0724 18.8889 20 18.8889Z" />
      </svg>
    ),
    title: "Fun and Engaging Activities",
    paragraph:
      "Activities like storytelling, role-playing, and interactive games ensure that children learn in a fun, hands-on environment, making language learning exciting.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 36C29.3888 36 37 28.3888 37 19C37 9.61116 29.3888 2 20 2C10.6112 2 3 9.61116 3 19C3 28.3888 10.6112 36 20 36Z"
        />
        <path d="M20 4C28.28 4 35 10.72 35 19C35 27.28 28.28 34 20 34C11.72 34 5 27.28 5 19C5 10.72 11.72 4 20 4ZM20 11C18.34 11 17 12.34 17 14C17 15.66 18.34 17 20 17C21.66 17 23 15.66 23 14C23 12.34 21.66 11 20 11ZM19 19H21V29H19V19Z" />
      </svg>
    ),
    title: "Comprehensive Progress Tracking",
    paragraph:
      "Track your learning progress through regular assessments and feedback, helping you understand your strengths and areas for improvement.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M25 4H15V36H25C27.7614 36 30 33.7614 30 31V9C30 6.23858 27.7614 4 25 4Z"
        />
        <path d="M10 2H20V38H10C7.23858 38 5 35.7614 5 33V7C5 4.23858 7.23858 2 10 2Z" />
      </svg>
    ),
    title: "Supportive Learning Environment",
    paragraph:
      "Our experienced teachers create a safe and encouraging space where every child feels confident to participate and express themselves in English.",
  },
];

export default featuresData;
