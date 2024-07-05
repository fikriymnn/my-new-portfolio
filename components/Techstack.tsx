import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "flutter",
    "dart",
    "firebase",
    "xcode",
    "java",
    "androidstudio",
    "visualstudiocode",
    "git",
    "github",
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "mysql",
    "mongodb",
    "vercel",
    "php",
    "codeigniter",
    "laravel",
    "figma",
    "unity",
    "csharp",
    "python",
    "anaconda",
    "r",
    "jupyter",
];

export function Techstack() {
    return (
        <>
            <div className="py-10">
                <h1 className='heading'>
                    I constantly improve my {' '}
                    <span className='text-purple'>Tech Stack {' '}</span>
                </h1>
            </div>
            <div className="overflow-hidden rounded-lg border bg-background ">
                <IconCloud iconSlugs={slugs} />
            </div>
        </>
    );
}
