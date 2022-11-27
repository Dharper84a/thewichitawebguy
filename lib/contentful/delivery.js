const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_KEY
});

class Delivery {

    static async getPage(slug, preview = false) {
        const results = await client.getEntries({
            content_type: 'page',
            'fields.slug': slug
        })

        if(results?.total && results.total > 0) return {
            fields: results.items[0].fields,
            sys: results.items[0].sys,
            id: results.items[0].sys.id
        }
        
        return false;
    }

    static async getEntry(id) {
        try {
            const result = await client.getEntry(id);
            return result;
        }catch(e) {
            // console.error(e);
            return false;
        }
    }
}

export default Delivery;