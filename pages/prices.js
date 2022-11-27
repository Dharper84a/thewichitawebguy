import Delivery from "../lib/contentful/delivery";
import Layout from "../components/layout";
import Sections from "../components/Sections";

export default function Prices({fields, sys}) {
    return (
        <Layout>
            <Sections sections={fields.sections} />
        </Layout>
    );
}


export const getStaticProps = async(context) => {
    const response = await Delivery.getPage('prices', context?.preview || false);
  
    if(response !== false) {
        return {
            props: { ...response },
            revalidate: 60
        }
    } else {
        return {
            notFound: true,
        }
    }
    
}
/*
Common Scenario: Build, launch, fix, update, update, rebuild.
5 to 8 years is generally the max life of a website.

Domain: $20 p/yr
===========================

SquareSpace - Self Designed and Built Website

Estimated Price:    $1800 more or less depending on how much your time is worth.
Recurring Costs:    $35 monthly
Delivery Time:      1 to 3 weeks
UI/UX Rating:       D  (65)
Asset Rating:       C- (72)
SEO Rating:         D  (65)
Performance Rating: D  (65)
Acc. Rating:        D  (65)
Best Practices:     D  (65)
----------------------------
Overall:            D  (66) 

1st Year    = $2220
Fix 16hr    = +$720
Update 32hr = +$1440
5yr         = +$1680
Update 32hr = +$1400
8yr         = +$1260

Lifetime    = $8,760 ($1,095 a year)
============================

Agency - Low to Moderatly Priced Website

Estimated Price:    $7,500 +/- 25% contracted. 25% due upfront and remainder at launch.
Recurring Costs:    $20 monthly
Delivery Time:      3 to 6 weeks
UI/UX Rating:       C+ (78)
Asset Rating:       A  (95)
SEO Rating:         C+ (78)
Performance Rating: D  (65)
Acc. Rating:        C  (75)
Best Practices:     D  (65)
----------------------------
Overall:            C  (76) 

1st Year    = $7700
Fix 16hr    = +$2000
Update 32hr = +$4000
5yr         = +$1000
Update 32hr = +$4000
8yr         = +$600

Lifetime    = $19,300 ($2,412.50 a year) - low to moderately low priced website
============================

The Wichita Web Guy - Standard 4 Page - 40 Hours Local Rate

Estimated Price:    $1,800. 25% due upfront and another 25% due at launch. Remainder can be spread over 6 months.
Recurring Costs:    $5 monthly
Delivery Time:      6 to 8 weeks
UI/UX Rating:       B- (82)
Asset Rating:       B  (85)
SEO Rating:         A  (95)
Performance Rating: S  (100)
Acc. Rating:        A  (95)
Best Practices:     A+ (98)
----------------------------
Overall:            A-  (92.5) 

1st Year    = $1860
Fix 16hr    = +$720
Update 32hr = +$1440
5yr         = +$240
Update 32hr = +$1400
8yr         = +$180

Lifetime    = $5,800 ($725 a year)
*/