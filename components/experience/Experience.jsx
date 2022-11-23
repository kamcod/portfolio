import React from "react";
import classes from './experience.module.css';

export default function Experience() {
    return (
        <>
            <p className="indent">
                Every human being develop his mind and get mature by exploring and experiencing in different field of life which enlightened his personality. After graduation in back 2018, I am in professional field where I have acquired experiences in different field with different organisations.
            </p>
            <p className="indent">
                I have worked in Human Resource department of a private firm as HR support executive where I have built so many soft skills like management, people handling, team building and last but not the least most importantly my communication skills.
                Later I have dived into field which suit me the most, I mean software engineer. Currently I am working as software engineer in a private software solution company and continuously learning new technologies day by day.
            </p>
            <p className="indent">
                Here is my following designations with different organisation along with my role over there.
            </p>

            <ul className={classes.experiences}>
                <li>
                    <div className={classes.designation}>
                        <span>Software Engineer at Uforia Infotech Solutions</span>
                        <span>[2021 - Present]</span>
                    </div>

                    <ul className={classes.job_roles}>
                        <li>Programming well-designed, testable, efficient code</li>
                        <li>Integrate software components into a fully functional software system</li>
                        <li>Document and maintain software functionality</li>
                        <li>Troubleshoot, debug and upgrade existing systems</li>
                        <li>Comply with project plans and industry standards</li>
                        <li>Ensure software is updated with latest features</li>
                    </ul>
                </li>
                <li>
                    <div className={classes.designation}>
                        <span>Human Resource Support Executive at Mindbridge Pvt. Ltd.</span>
                        <span>[2019 - 2021]</span>
                    </div>
                    <ul className={classes.job_roles}>
                        <li>Maintained "open door" policy to encourage employee communications and resolution of issues.</li>
                        <li>Facilitated all new employee orientations to foster positive team attitude.</li>
                        <li>Actively involved in recruitment by preparing job descriptions and managing the hiring process</li>
                        <li>Implementing effective onboarding plans</li>
                        <li>Bridging management and employee relations by addressing demands, grievances or other issues</li>
                    </ul>
                </li>
            </ul>

        </>
    )
}
