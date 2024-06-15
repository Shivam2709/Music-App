"use client";
import Link from "next/link";
import React from "react";
import Image from 'next/image'
function page() {
  function MusicIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    );
  }

  function HeadphonesIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </svg>
    );
  }

  function CalendarIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    );
  }

  return (
    <>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.6] bg-dot-black/[0.2] relative flex items-center justify-center">
        <section className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent" />
          <div className="relative z-10 text-center space-y-6 max-w-2xl px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Elevate Your Musical Journey
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              Discover the art of music at our premier school.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                href="#"
              >
                Enroll Now
              </Link>
              <Link
                className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-white text-white font-medium hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                href="#"
              >
                Learn More
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4">
                <MusicIcon className="h-8 w-8 text-white" />
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Expert Instruction
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Learn from industry-leading musicians.
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4">
                <CalendarIcon className="h-8 w-8 text-white" />
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Flexible Scheduling
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Fit lessons around your busy life.
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4">
                <HeadphonesIcon className="h-8 w-8 text-white" />
                <div >
                  <h3 className="text-lg font-medium text-white">
                    State-of-the-Art Facilities
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Learn in our cutting-edge studios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-12 md:py-24 bg-gray-900 justify-center items-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-10 gap-52">
                <h3 className="text-xl font-bold mb-2 text-white">Instrument Lessons</h3>
                <p className="text-gray-300 dark:text-gray-400 mb-4">
                  Master your instrument of choice, from piano to guitar to
                  drums and more.
                </p>
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  href="#"
                >
                  Explore Lessons
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Music Theory</h3>
                <p className="text-gray-300 dark:text-gray-400 mb-4">
                  Deepen your understanding of music with our comprehensive
                  theory courses.
                </p>
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  href="#"
                >
                  Discover Theory
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  Performance Workshops
                </h3>
                <p className="text-gray-300 dark:text-gray-400 mb-4">
                  Hone your stage presence and performance skills in our
                  interactive workshops.
                </p>
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  href="#"
                >
                  Join a Workshop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold mb-4">Experienced Faculty</h2>
              <p className="text-gray-400 mb-8">
                Our music school is staffed by a team of highly skilled and
                experienced instructors who are passionate about sharing their
                knowledge and helping students of all levels reach their full
                potential. With years of professional experience and a deep
                understanding of music theory and performance, our faculty is
                dedicated to providing personalized guidance and support to each
                student.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  href="#"
                >
                  Meet the Faculty
                </Link>
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-white text-white font-medium hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div>
              <Image
                alt="Music School Faculty"
                className="rounded-lg object-cover"
                height={400}
                src="https://images.pexels.com/photos/7520930/pexels-photo-7520930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Student Recitals</h3>
                <p className="text-gray-300 dark:text-gray-400 mb-4">
                  Showcase your talents in our regular student recital events.
                </p>
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  href="#"
                >
                  Attend a Recital
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Summer Camps</h3>
                <p className="text-gray-300 dark:text-gray-400 mb-4">
                  Immerse yourself in music during our engaging summer camp
                  programs.
                </p>
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  href="#"
                >
                  Explore Camps
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Community Concerts</h3>
                <p className="text-gray-300 dark:text-gray-400 mb-4">
                  Attend our public concerts and support our talented student
                  musicians.
                </p>
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  href="#"
                >
                  View Upcoming Concerts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Image
                alt="Music School Facilities"
                className="rounded-lg object-cover"
                height={400}
                src="https://media.istockphoto.com/id/1039281614/photo/young-boy-teaching-to-play-guitar.jpg?s=2048x2048&w=is&k=20&c=S0iO9VgHlxyexLakwaBLnX9D8ZeatJTxNal2zixjvQI="
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                State-of-the-Art Facilities
              </h2>
              <p className="text-gray-400 mb-8">
                Our music school is equipped with cutting-edge facilities
                designed to provide the best possible learning environment for
                our students. From our soundproof practice rooms and recording
                studios to our high-quality instruments and audio equipment,
                we&#39;ve invested in the resources necessary to help you reach your
                full potential as a musician.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  href="#"
                >
                  Explore Our Facilities
                </Link>
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-white text-white font-medium hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Student Mentorship</h3>
                <p className="text-gray-300 dark:text-gray-400 mb-4">
                  Receive personalized guidance and support from our experienced
                  mentors.
                </p>
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Music Competitions</h3>
                <p className="text-gray-300 dark:text-gray-400 mb-4">
                  Showcase your talents and compete against other talented
                  musicians.
                </p>
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  href="#"
                >
                  Explore Competitions
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-4 text-white">Alumni Network</h2>
                <p className="text-gray-300 dark:text-gray-400 mb-8">
                  Connect with our vibrant community of successful alumni
                  musicians.
                </p>
                <Link
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  href="#"
                >
                  Join the Network
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
