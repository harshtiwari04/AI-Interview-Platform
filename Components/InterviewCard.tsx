import React from 'react'
import dayjs from 'dayjs'
import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";
import { Button } from "@/Components/ui/button"; // ✅ Fixed import path (lowercase 'components')
import Link from "next/link";

import DisplayTechIcons from "@/Components/DisplayTechIcons"; // ✅ Fixed import path (lowercase 'components')

interface InterviewCardProps {
    interview: string;
    userid: string;
    role: string;
    type: string;
    techstack: string[];
    createdat: string | Date;
}

interface Feedback {
    createdAt: string;
    totalScore: number;
    finalAssessment: string;
}

const InterviewCard = ({
                           interview,
                           userid,
                           role,
                           type,
                           techstack,
                           createdat
                       }: InterviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
    const formattedDate = dayjs(
        feedback?.createdAt || createdat || Date.now()
    ).format("MMM D, YYYY");

    return (
        <div className={"card-border w-[360px] max-sm:w-full min-h-96"}>
            <div className={"card-interview"}>
                <div>
                    <div className={"absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600"}>
                        <p className={"badge-text"}>{normalizedType}</p>
                    </div>

                    <Image
                        src={getRandomInterviewCover()}
                        alt="cover image"
                        width={90}
                        height={90}
                        className="rounded-full object-cover size-[90px]"
                    />

                    <h3 className={"mt-5 capitalize"}>{role} Interview</h3>

                    <div className={"flex flex-row gap-5 mt-3"}> {/* ✅ Fixed typo: flex--row → flex-row */}
                        <div className={"flex flex-row gap-2"}>
                            <Image src={"/calendar.svg"} alt={"calendar"} width={22} height={22} />
                            <p>{formattedDate}</p>
                        </div>

                        <div className={"flex flex-row gap-2 items-center"}>
                            <Image src={"/star.svg"} alt={"star"} width={22} height={22} />
                            <p>{feedback?.totalScore || "---"}/100</p>
                        </div>
                    </div>

                    <p className={"line-clamp-2 mt-5"}>
                        {feedback?.finalAssessment ||
                            "You haven't taken the interview yet. Take it now to improve your skills."}
                    </p>
                </div>

                <div className={"flex flex-row justify-between"}>
                    <DisplayTechIcons techstack={techstack} /> {/* ✅ Fixed prop name: techStack → techstack */}
                    <Button className="btn-primary">
                        <Link
                            href={
                                feedback
                                    ? `/interview/${interview}/feedback`
                                    : `/interview/${interview}`
                            }
                        >
                            {feedback ? "Check Feedback" : "View Interview"}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InterviewCard;
