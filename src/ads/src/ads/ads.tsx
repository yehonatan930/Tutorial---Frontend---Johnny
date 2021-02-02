import React from 'react';
import { Card, CardMedia, Link } from '@material-ui/core';
// import Kitbag from "./kitbag.jpg";
// import LyingKitbag from "./LyingK.jpg";
// import SmallLyingKitbag from "./SmallKit.jpg";
// import WholeRowKitbag from "./‏‏LyingRow.jpg";

/** CardProps is image of the ad, and href which is the ad link
 * @image -  the image which is shown on the ad, the proportion of the width/height must be pretty close
 *          to the width/height of the unit chosen
 * @href - the page which the ad redirects to
 */
interface CardProps {
    image: string,
    href: string,
}

/**
 * Unit is a string which decides which ad style would be shown, what is each style  explained on the export section
 */
type Unit = 'HalfPage' | 'StickyHalfPage' | 'Banner' | 'StickyBanner' | 'Footer' | 'MediumRectangle' | 'SmallRectangle';

/**
 * this template gets a unit type and returns a functional react component, this react component which is returned, gets image 
 * and and href, image is the image which is displayed on the advertisement, , and the href is link which opens when you click
 * on the ad
 * @param unit this param represent which portion of the view it takes, for example it can be 'HalfPage' or 'Footer'
 * for full detail look at type Unit
 */
const Template: (unit: Unit) => React.FC<CardProps> = (unit: string) => {
    return (props) => { //the functional component which is returned
        const { image, href } = props;
        //const defaultImage = UnitImage(unit); // default image shown if no image provided by the user, the default is a kitbag
        //the functional component is rendering a card with only an image
        return (<>
            <Card style={unitStyle(unit)}>
                <Link target="_blank" href={href ? href : "http://www.google.com/"}>
                    <CardMedia
                        style={ImageStyle(unit)}
                        image={image}// ? image : defaultImage}
                    />
                </Link>
            </Card>
        </>
        )
    }
};

/**
 * HalfPage stretches on the whole height of the view, and about quarter of the width
 */
export const HalfPage = Template('HalfPage');

/**
 * StickyHalfPage is the same as HalfPage, but is sticky to the right
 */
export const StickyHalfPage = Template('StickyHalfPage');

/**
 * Banner is centered and stretches on the half of the width
 */
export const Banner = Template('Banner');

/**
 * StickyBanner is the same as Banner, but is sticky to the top
 */
export const StickyBanner = Template('StickyBanner');

/**
 * Footer is sticky to the bottom and take the whole width
 */
export const Footer = Template('Footer');

/**
 * MediumRectangle lying rectangle 15% of the width view
 */
export const MediumRectangle = Template('MediumRectangle');

/**
 * SmallRectangle lying rectangle 20% of the width
 */
export const SmallRectangle = Template('SmallRectangle');


/**
 * size of each unit
 * @param unit decides which style is returned
 */
function ImageStyle(unit: string): React.CSSProperties {
    if (unit === "Banner" || unit === "StickyBanner") {
        return {
            height: '30vh',
            width: "50vw",
        };
    }
    if (unit === "Footer") {
        return {
            height: '15vh',
            width: "100vw",
        };
    }
    else if (unit === "HalfPage" || unit === "StickyHalfPage") {
        return {
            height: '100vh',
            width: "20vw",
        };
    }
    else if (unit === "SmallRectangle") {
        return {
            height: '10vh',
            width: "20vw",
        };
    }
    else if (unit === "MediumRectangle") {
        return {
            height: '15vh',
            width: "30vw",
        };
    }
    else {
        return {
            height: '30vh',
            width: "50vw",
        };
    }

}

// /**
//  * default image based on the unit
//  * @param unit the unit that needs image
//  */
// function UnitImage(unit: string): string | undefined {
//     if (unit === "Banner" || unit === "StickyBanner") {
//         return LyingKitbag;
//     }
//     if (unit === "Footer") {
//         return WholeRowKitbag;
//     }
//     else if (unit === "SmallRectangle" || unit === "MediumRectangle") {
//         return SmallLyingKitbag;
//     }
//     else {
//         return Kitbag;
//     }
// }

/**
 * css of each unit based on the unit
 * @param unit that needs style
 */

function unitStyle(unit: string): React.CSSProperties {
    let style: React.CSSProperties;
    if (unit === "MediumRectangle")
        style = {
            maxWidth: "45vw",
            maxHeight: "auto",
            border: "none",
            boxShadow: "none",
            display: 'inline-block',

        };
    else if (unit === "Banner")
        style = {
            maxWidth: "75vw",
            maxHeight: "30vh",
            border: "none",
            boxShadow: "none",
            display: 'inline-block',
        };
    else if (unit === "StickyBanner")
        style = {
            maxWidth: "75vw",
            maxHeight: "30vh",
            border: "none",
            boxShadow: "none",
            display: 'inline-block',
            zIndex: 99999,
            position: "fixed",
            top: "0",
            left: "25vw"

        };
    else if (unit === "Footer")
        style = {
            maxWidth: "100vw",
            maxHeight: "15vh",
            border: "none",
            boxShadow: "none",
            display: 'inline-block',
            zIndex: 99999,
            position: "fixed",
            bottom: "0",
            left: "0"
        };
    else if (unit === "SmallRectangle")
        style = {
            maxWidth: "20vw",
            maxHeight: "auto",
            border: "none",
            boxShadow: "none",
            display: 'inline-block',

        };
    else if (unit === "HalfPage")
        style = {
            maxWidth: "20vw",
            maxHeight: "auto",
            border: "none",
            boxShadow: "none",

        };
    else if (unit === "StickyHalfPage")
        style = {
            maxWidth: "20vw",
            maxHeight: "auto",
            border: "none",
            boxShadow: "none",
            position: "fixed",
            zIndex: 99999,
            top: "0vh",
            right: "0",

        };
    else {
        style = {}
    }

    return style;
}

