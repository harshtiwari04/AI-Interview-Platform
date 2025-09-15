import React from 'react'
import Image from "next/image";
import { cn } from "@/lib/utils"; // ✅ Added import for cn (adjust path as needed)

enum CallStatus {
    INACTIVE = "INACTIVE",
    CONNECTING = "CONNECTING",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED",
}

const Agent = ({ userName }: AgentProps) => {
    const isSpeaking = true;
    const currentStatus = CallStatus.FINISHED;

    const messages = [
        'What is your name?',
        'My name is Harsh , nice to meet you !.'
    ];

    const lastmessage = messages[messages.length - 1];

    return (
        <>
            <div className={"call-view"}>
                <div className={"card-interviewer"}>
                    <div className={"avatar"}>
                        <Image
                            src={"/ai-avatar.png"}
                            alt={"vapi"}
                            width={65}
                            height={54}
                            className={"object-cover"}
                        />
                        {isSpeaking && <span className={"animate-speak"}></span>}
                    </div>
                    <h3>AI Interviewer</h3>
                </div>

                <div className={"card-border"}>
                    <div className={"card-content"}>
                        <Image
                            src={"/user-avatar.png"}
                            alt={"user-avatar"}
                            width={540}
                            height={540}
                            className={"rounded-full object-cover size-[120px]"}
                        />
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>

            {messages.length > 0 && (
                <div className={"transcript-border"}>
                    <div className={"transcript"}>
                        <p
                            key={lastmessage}
                            className={cn(
                                'transition-opacity duration-500 opacity-0',
                                'animate-fadeIn opacity-100'
                            )}
                        >
                            {lastmessage}
                        </p>
                    </div>
                </div>
            )}

            <div className={"w-full flex justify-center"}>
                {currentStatus !== 'ACTIVE' ? (
                    <button className={"relative btn-call"}>
                        <span
                            className={cn(
                                "absolute animate-ping rounded-full opacity-75",
                                currentStatus !== 'CONNECTING' && 'hidden' // ✅ fixed logic
                            )}
                        />
                        <span>
                            {currentStatus === 'INACTIVE' || currentStatus === 'FINISHED'
                                ? 'Call'
                                : '...'}
                        </span>
                    </button>
                ) : (
                    <button className={"btn-disconnect"}>End</button>
                )}
            </div>
        </>
    )
}

export default Agent
