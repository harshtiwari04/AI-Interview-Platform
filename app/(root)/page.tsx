import React from 'react'
import  { Button }  from "@/Components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/Components/InterviewCard";

const Page = () => {
    return (
        <>
            <section className={"card-cta"}>
                <div className={"flex flex-col gap-6 max-w-lg"}>
                    <h2>Get Interview Ready with PrepWise</h2>
                    <p className={"text-lg"}>
                        Practice on real interview questions & get instant feedback
                    </p>

                    <Button asChild className={"btn-primary max-sm:w-full"}>
                        <Link href={"/interview"}>Start an Interview</Link>
                    </Button>
                </div>

                <Image
                    src={"/robot.png"}
                    alt={"Robo-dude"}
                    width={400}
                    height={400}
                    className={"max-sm:hidden"}
                />
            </section>

            <section className={"flex flex-col gap-6 mt-8"}>
                <h2>Your Interviews</h2>
                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id} />
                    ))} {/* ✅ fixed misplaced closing parenthesis */}
                </div>
            </section>

            <section className={"flex flex-col gap-6 mt-8"}>
                <h2>Take an Interview</h2>
                <div className="interview-section">
                    <div className="interviews-section">
                        {dummyInterviews.map((interview) => (
                            <InterviewCard {...interview} key={interview.id} />
                        ))} {/* ✅ fixed misplaced closing parenthesis */}
                        {/* <p>You haven't taken any interviews yet</p> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
