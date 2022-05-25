import { Request, Response } from "express";
import greeting from "../lib/greetings"

export class AuthenticationViewsRenderer {
    //signup view engine
    static signUp(req: Request, res: Response) {
        res.render("pages/authentication/sign-up", { title: "create account", layout: "./layouts/user-authentication-layout", error: {}, value: {} });
    }
    static login(req: Request, res: Response) {
        res.render("pages/authentication/login", { title: "login to dashboard", layout: "./layouts/user-authentication-layout", error: {}, value: {} });
    }
    static passwordReset(req: Request, res: Response) {
        res.render("pages/authentication/forgotten-password", { title: "account recovery - confirm email", error: { email: "" }, layout: "./layouts/user-authentication-layout" });
    }

}


export class GeneralPagesViewsRenderer {
    static indexPage(req: Request, res: Response) {
        interface PageInterface {
            anchor: string,
            route: string
        }
        //fetch all existing category here then destructure in into the categories
        const categories: PageInterface[] = [
            { route: "animation", anchor: "Animation" },
            { route: "css-code-generator", anchor: " CSS Code Generator" },
            { route: "design-inspiration", anchor: "Design Inspiration" },
            { route: "icon-libraries", anchor: "Icon libraries" },
            { route: "images", anchor: "Images" },
            { route: "javascript-ui-libraries", anchor: "JavaScript UI libraries" },
            { route: "svg-illustrations-shapes-and-backgrounds", anchor: "svg illustrations,shapes and backgrounds" },
            { route: "ui-templates-and-patters", anchor: "UI templates & patterns" },
            { route: "work-around", anchor: "collection of Frontend and backend libraries" },
            { route: "mobile-libraries", anchor: "Mobile application builders and compliers" },
            { route: "more", anchor: " more ..." },
        ]
        res.render("index", { title: "Collection of images, icons, code blocks and illustrations and morefor designers and developers ", layout: "./layouts/base-layout", categories });
    }

    //contact page
    static async contact(req: Request, res: Response) {
        res.render("contact", { title: "Contact ", layout: "./layouts/base-layout", });
    }

    static async termsOfUse(req: Request, res: Response) {
        res.render("terms-of-use", { title: "Legal | terms of use ", layout: "./layouts/base-layout", });

    }

    static async privacyPolicy(req: Request, res: Response) {
        res.render("privacy-policy", { title: "Legal | privacy policy ", layout: "./layouts/base-layout", });

    }

    static async cookiePolicy(req: Request, res: Response) {
        res.render("cookie-policy", { title: "Legal | cookie policy ", layout: "./layouts/base-layout", });

    }
}





