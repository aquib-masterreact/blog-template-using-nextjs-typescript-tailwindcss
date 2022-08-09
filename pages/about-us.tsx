/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, ArticleHeader, Text, List, Image, LinkTo, Seperator, Slider  } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'About Us',
        description: `Hi we are WebExpe. This is an opensource blog template which can help you start a simple static blog.`,
        keywords: 'webexpx, contact us, webexpe13@gmail.com, next js blog template',
        author: 'Mayur Nalwala, Rupali Yadav'
    }  
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                    <a href="https://webexpe.com/" target="_blank" rel="noopener noreferrer" className="block rounded-lg md:w-[15%] w-[50%] overflow-hidden">
                        <Image src="/public/images/YT Logo.png" size={ImageSize.DEFAULT} alt="webexpe.com" />
                    </a>
                    <Text title className='mb-5 mt-10'>
                        Hi we are WebExpe.
                    </Text>
                    <Text subtitle className='text-xl mb-5'>
                        This is an opensource blog template which can help you start a simple static blog.
                    </Text>

                    <Text p className='text-lg'>
                        The idea was to start a blog or create a template with as little investment as possible. <br />In this template we have used Next.js SSG to create static HTML files which can be hosted on firebase or any static site hosting service. <br />
                        There is also options like vercel for hosting Next.js dynamic webistes but we wanted this template to be easy to use for any non techie person too, so we explored the option of static site generation. <br /><br />
                        If you have a github account you can clone the project or use it as a template or else you can simply download the code.
                    </Text>

                    <div className="flex flex-wrap justify-between">
                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Features
                            </Text>
                            <List type={ListType.bullet}>
                                <li>Minimilist Template</li>
                                <li>Light and Dark theme</li>
                                <li>Default and Centered Layout</li>
                                <li>Maximize lighthouse score</li>
                                <li>Privacy Policy, Terms and Conditions page template</li>
                                <li>Integrate with <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS </a></li>
                                <li>Type checking TypeScript</li>
                                <li>SEO metadata, Open Graph tags with Next SEO</li>
                            </List>
                        </div>

                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Philosophy
                            </Text>
                            <List type={ListType.bullet}>
                                <li>Minimal code</li>
                                <li>SEO-friendly</li>
                                <li>Production-ready</li>
                                <li>Easy to use</li>
                                <li>Sould be faster than Wordpress or any other CMS</li>
                            </List>
                        </div>

                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Requirements
                            </Text>
                            <List type={ListType.bullet}>
                                <li>Node.js</li>
                                <li>NPM</li>
                                <li>Firebase for hosting</li>
                                <li>VS Code for editing</li>
                                <li>Imp VS Code plugins: <br /> <a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense" target="_blank" rel="noopener noreferrer">Path Intellisense</a> , <br /> <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss" target="_blank" rel="noopener noreferrer">Tailwind CSS IntelliSense</a> </li>
                            </List>
                        </div>
                    </div>
                    <Seperator />
                    <Text subtitle className='text-3xl font-medium'>
                        License
                    </Text>
                    <Text p className='text-lg'>
                        Licensed under the MIT License, Copyright © {CURRENT_YEAR}
                    </Text>
                    <Text p className='text-lg'>
                        This project is <b>opensouce</b>. Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug, create your versions of this template and help the community, also if you are using our template a little credit will be much appreciated.
                    </Text>
                    <Seperator />
                    <Text p className='text-lg'>
                        Made with ♥ by <a href="https://webexpe.com/" target="_blank" rel="noopener noreferrer" className="font-medium tracking-widest">WebExpe</a>
                    </Text>
                    <a href="https://www.buymeacoffee.com/webexpe13z" target="_blank" rel="noopener noreferrer">
                        <Image src="/public/images/bmc.png" size={ImageSize.XS} className="ml-0" alt="webexpe.com" />
                    </a>
                    <Text p className='text-lg mt-5'>
                        For any queries and doubts please feel free to write us at <u><i>webexpe13@gmail.com</i></u> or drop a comment on our github discussions <a href="https://github.com/nmayur/nextjs-simple-blog-template/discussions" target="_blank" rel="noopener noreferrer"><u><i>github.com/nmayur/nextjs-simple-blog-template/discussions</i></u></a>
                    </Text>
                </div>
            </section>
        </PageLayout>
    )
}

export default AboutUs