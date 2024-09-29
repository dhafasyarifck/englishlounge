"use client";
import { useState } from "react";

const SectionFaq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index); 
  };

  return (
    <section id="faq-section" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        <h2 className="text-center text-5xl font-bold mb-12">FAQ</h2> {/* Increased size to 5xl */}
        <div className="w-full max-w-5xl mx-auto space-y-6"> {/* Increased space between items */}
          
          {/* FAQ 1 */}
          <div className="border-b border-gray-200 pb-6"> {/* Increased bottom padding */}
            <button
              onClick={() => toggleFaq(1)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *1. What is *English Lounge?**  
              </span>
              <span className="text-3xl">{openFaq === 1 ? "^" : ">"}</span> {/* Increased size to 3xl for icon */}
            </button>
            {openFaq === 1 && (
              
              <p className="mt-4 text-xl text-gray-700"> {/* Increased size to xl for paragraph */}
                English Lounge is a language learning platform offering interactive English courses for learners of all levels, from beginners to advanced speakers. Our aim is to create a relaxed and supportive environment where students can improve their English skills.
              </p>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(2)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *2. Who can join *English Lounge?** 
              </span>
              <span className="text-3xl">{openFaq === 2 ? "^" : ">"}</span>
            </button>
            {openFaq === 2 && (
              <p className="mt-4 text-xl text-gray-700">
               Anyone interested in improving their English is welcome to join! 
               We cater to students, professionals, and anyone looking to enhance 
               their language skills for travel, work, or personal growth.

              </p>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(3)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>*3. What courses are offered?* </span>
              <span className="text-3xl">{openFaq === 3 ? "^" : ">"}</span>
            </button>
            {openFaq === 3 && (
              <div className="mt-4 text-xl text-gray-700">
              <p>We offer courses in:</p>
              <ul className="list-disc pl-6">
                <li>General English</li>
                <li>Business English</li>
                <li>Conversational English</li>
                <li>Grammar & Writing</li>
                <li>IELTS and TOEFL preparation</li>
                <li>Specialized courses for specific industries (e.g., hospitality, IT, etc.)</li>
              </ul>
            </div>
            )}
          </div>

          {/* FAQ 4 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(4)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *4. How are the courses structured?*  
              </span>
              <span className="text-3xl">{openFaq === 4 ? "^" : ">"}</span>
            </button>
            {openFaq === 4 && (
              <p className="mt-4 text-xl text-gray-700">
               Our courses include a blend of live online classes, recorded lessons, interactive
                exercises, and one-on-one sessions with teachers. You can choose flexible schedules
                 that fit your lifestyle.
              </p>
            )}
          </div>
          
          {/* FAQ 5 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(5)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *5. Who are the teachers at *English Lounge?**  
              </span>
              <span className="text-3xl">{openFaq === 5 ? "^" : ">"}</span>
            </button>
            {openFaq === 5 && (
              <p className="mt-4 text-xl text-gray-700">
                All of our teachers are qualified, experienced, and native or near-native
                 English speakers. They are skilled in teaching both beginners and advanc
                 ed learners, and they use modern methods to ensure practical and effecti
                 ve learning.
              </p>
            )}
          </div>

          {/* FAQ 6 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(6)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *6. How do I enroll in a course?*  
              </span>
              <span className="text-3xl">{openFaq === 6 ? "^" : ">"}</span>
            </button>
            {openFaq === 6 && (
              <p className="mt-4 text-xl text-gray-700">
              You can enroll by visiting our website and choosing your desired course.
               Once you sign up, you’ll receive further instructions on starting your
                classes.
              </p>
            )}
          </div>

          {/* FAQ 7 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(7)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *7. What is the duration of the courses?*
              </span>
              <span className="text-3xl">{openFaq === 7 ? "^" : ">"}</span>
            </button>
            {openFaq === 7 && (
              <p className="mt-4 text-xl text-gray-700">
                Course lengths vary depending on the program. Most courses range
                 from 4 to 12 weeks, with options for longer or shorter programs
                  based on your needs.
              </p>
            )}
          </div>

          {/* FAQ 8 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(8)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *8. What is the class size?*  
              </span>
              <span className="text-3xl">{openFaq === 8 ? "^" : ">"}</span>
            </button>
            {openFaq === 8 && (
              <p className="mt-4 text-xl text-gray-700">
               We offer both group classes (typically 6-10 students)
                and one-on-one tutoring. Group classes allow for more
                 interaction with peers, while private lessons provide
                  personalized attention.
              </p>
            )}
          </div>

          {/* FAQ 9 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(9)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *9. Do I need to take a placement test?* 
              </span>
              <span className="text-3xl">{openFaq === 9 ? "^" : ">"}</span>
            </button>
            {openFaq === 9 && (
              <p className="mt-4 text-xl text-gray-700">
                Yes, new students take a free placement test to determine their current
                 English proficiency. This helps us place you in the course that best
                  matches your skill level.
              </p>
            )}
          </div>

          {/* FAQ 10 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(10)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *10. How much do the courses cost?*  
              </span>
              <span className="text-3xl">{openFaq === 10 ? "^" : ">"}</span>
            </button>
            {openFaq === 10 && (
              <p className="mt-4 text-xl text-gray-700">
                Course fees vary based on the type and length of the course. 
                Please visit our website or contact us for detailed pricing.
              </p>
            )}
          </div>

          {/* FAQ 11 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(11)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *11. Are there free trial classes available?*  
              </span>
              <span className="text-3xl">{openFaq === 11 ? "^" : ">"}</span>
            </button>
            {openFaq === 11 && (
              <p className="mt-4 text-xl text-gray-700">
               Yes! We offer a free trial class for new students so you can experience our
                teaching methods before committing to a full course.
              </p>
            )}
          </div>

          {/* FAQ 12 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(12)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *12. Can I reschedule or cancel a class?* 
              </span>
              <span className="text-3xl">{openFaq === 12 ? "^" : ">"}</span>
            </button>
            {openFaq === 12 && (
              <p className="mt-4 text-xl text-gray-700">
                Yes, if you inform us at least 24 hours before the class, we can help you reschedule. Cancellations 
                are also possible, but terms may vary based on your enrollment plan.
              </p>
            )}
          </div>

          {/* FAQ 13 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(13)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *13. Will I receive a certificate after completing the course?*  
              </span>
              <span className="text-3xl">{openFaq === 13 ? "^" : ">"}</span>
            </button>
            {openFaq === 13 && (
              <p className="mt-4 text-xl text-gray-700">
                Yes, students who successfully complete their course will receive 
                a certificate from English Lounge recognizing their achievement and level of proficiency.
              </p>
            )}
          </div>

          {/* FAQ 14 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(14)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *14. What learning materials do I need?* 
              </span>
              <span className="text-3xl">{openFaq === 14 ? "^" : ">"}</span>
            </button>
            {openFaq === 14 && (
              <p className="mt-4 text-xl text-gray-700">
               All essential materials, including e-books, worksheets, and practice tests,
                are provided by us. You’ll also have access to our online resources and learning platform.
              </p>
            )}
          </div>

          {/* FAQ 15 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(15)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *15. What is the method of payment?* 
              </span>
              <span className="text-3xl">{openFaq === 15 ? "^" : ">"}</span>
            </button>
            {openFaq === 15 && (
              <p className="mt-4 text-xl text-gray-700">
                We accept various payment methods, including credit/debit cards, PayPal,
                 and bank transfers. Flexible payment plans are also available for longer courses.
              </p>
            )}
          </div>

          {/* FAQ 16 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(16)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *16. Can I access the course from anywhere in the world?*  
              </span>
              <span className="text-3xl">{openFaq === 16 ? "^" : ">"}</span>
            </button>
            {openFaq === 16 && (
              <p className="mt-4 text-xl text-gray-700">
                Absolutely! Our courses are online and accessible from any location with an internet connection.
              </p>
            )}
          </div>

          {/* FAQ 17 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(17)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *17. What if I miss a class?*  
              </span>
              <span className="text-3xl">{openFaq === 17 ? "^" : ">"}</span>
            </button>
            {openFaq === 17 && (
              <p className="mt-4 text-xl text-gray-700">
               Don’t worry! Classes are recorded, so you can watch the lesson at your convenience. You can also schedule a catch-up session if needed.

              </p>
            )}
          </div>

          {/* FAQ 18 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(18)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *18. Is there any support outside of class time?*
              </span>
              <span className="text-3xl">{openFaq === 18 ? "^" : ">"}</span>
            </button>
            {openFaq === 18 && (
              <p className="mt-4 text-xl text-gray-700">
               Yes, you can reach out to our teachers or support team anytime for assistance.
                We also have discussion forums and group chats for peer-to-peer support.
              </p>
            )}
          </div>

          {/* FAQ 19 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(19)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *19. How do I contact *English Lounge for more information?**  
              </span>
              <span className="text-3xl">{openFaq === 19 ? "^" : ">"}</span>
            </button>
            {openFaq === 19 && (
              <p className="mt-4 text-xl text-gray-700">
                You can reach us via email at info@englishlounge.com, or by phone at +123-456-7890.
                 We also have live chat support on our website.
              </p>
            )}
          </div>

          {/* FAQ 20 */}
          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={() => toggleFaq(20)}
              className="w-full text-left flex justify-between items-center font-semibold text-2xl focus:outline-none"
            >
              <span>
              *20. How can I track my progress?*  
              </span>
              <span className="text-3xl">{openFaq === 20 ? "^" : ">"}</span>
            </button>
            {openFaq === 20 && (
              <p className="mt-4 text-xl text-gray-700">
               Your progress is tracked through quizzes, assignments, and feedback from teachers. You can access your progress
                reports on the learning platform to see how you’re improving over time.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFaq;
