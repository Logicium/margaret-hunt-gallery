const data = {

    aboutEvent:"Explore the boundary-breaking journey of prolific artist Margaret Hunt in a landmark retrospective exhibition. Witness a lifetime dedicated to fearless creation across diverse mediums.",

    artPieces: [
        {
            "title": "Dreamwork",
            "desc": "Three whimsical houses stand under a watchful bird against a backdrop of musical scores and soft colors. Where do these moonlit, midnight dreams lead? This mixed media piece invites you into a narrative woven from symbols and textures.",
            "medium": "Mixed Media",
            "tags": "dream, surreal, mixed media, houses, bird, night, moon, stars, collage",
            "date": "2019",
            "image": "/images/art/dreamwork.heic",
            "id": 0,
            "dimensions": "11\"x14\""
        },
        {
            "title": "Trilemma",
            "desc": "An angel, a neutral face, and a devil emerge from a rich green encaustic background. Which voice guides the self? This self-portrait captures the internal conflict with stark simplicity.",
            "medium": "Encaustic on Panel",
            "tags": "portrait, self portrait, faces, angel, devil, green, abstract, encaustic",
            "date": "2022",
            "image": "/images/art/trilemma.heic",
            "id": 1,
            "dimensions": "10\"x10\""
        },
        {
            "title": "Portrait of Nicole: The Day The Braces Came Off",
            "desc": "A moment of youthful joy captured in oil, celebrating a milestone. Can a painting hold the warmth of a specific memory? This portrait immortalizes a bright smile and a fleeting moment in time.",
            "medium": "Oil on Canvas",
            "tags": "portrait, female, girl, smile, oil painting, realism",
            "date": "1989",
            "image": "/images/art/nicole1.heic",
            "id": 2,
            "dimensions": "20\"x16\""
        },
        {
            "title": "Portrait of Nicole",
            "desc": "A black and white photograph freezes a younger Nicole, braids framing an innocent gaze. How does the lens capture the essence of childhood? A timeless glimpse into the past.",
            "medium": "Photograph",
            "tags": "portrait, female, child, girl, braids, photograph, black and white",
            "date": "1983",
            "image": "/images/art/nicole2.heic",
            "id": 3,
            "dimensions": "16\"x20\""
        },
        {
            "title": "Family Farm in Minnesota",
            "desc": "Figures gather outside a starkly rendered farmhouse under a wide sky. What stories does this familiar scene hold? Painted with naive charm, it evokes nostalgia for rural life.",
            "medium": "Oil on Canvas",
            "tags": "landscape, farm, house, family, children, rural, Minnesota, oil painting",
            "date": "1988",
            "image": "/images/art/farm.heic",
            "id": 4,
            "dimensions": "18\"x24\""
        },
        {
            "title": "An Apparition",
            "desc": "Ghostly figures dance and swirl in a dramatic, dark red acrylic wash. Are they memories, dreams, or something else entirely? This piece explores the ethereal and the 'foreshadowing' of the unseen.",
            "medium": "Acrylic",
            "tags": "abstract, figurative, apparition, ghost, dancers, red, dark, acrylic",
            "date": "2006",
            "image": "/images/art/apparition.heic",
            "id": 5,
            "dimensions": "24\"x24\""
        },
        // {
        //     "title": "Self Portrait",
        //     "desc": "Rendered in oil pastel, a profile emerges from shadow, contemplative and stark. What truths are revealed when the artist turns inward? An early exploration of self from 1971.",
        //     "medium": "Oil Pastel on Arches",
        //     "tags": "portrait, self portrait, profile, dark, shadow, oil pastel",
        //     "date": "1971",
        //     "image": "/images/art/portrait.png",
        //     "id": 6
        // },
        {
            "title": "Meditation looking upward",
            "desc": "Abstracted white leaves cluster against a bright blue sky, viewed from below. Can looking up change our perspective? This acrylic piece offers a moment of peaceful contemplation through nature's patterns.",
            "medium": "Acrylic on panel",
            "tags": "nature, tree, leaves, sky, blue, white, abstract, meditation, acrylic",
            "date": "2000",
            "image": "/images/art/meditation.heic",
            "id": 7,
            "dimensions": "24\"x24\""
        },
        {
            "title": "Abundance",
            "desc": "A vibrant encaustic collage layers figures, hands, and text like 'MATTER' and 'mental faculties'. How do we manifest abundance through the interplay of spirit and matter? A rich tapestry of ideas and textures.",
            "medium": "Mixed media encaustic",
            "tags": "collage, mixed media, encaustic, abstract, spiritual, hand, figure, text",
            "date": "2015",
            "image": "/images/art/abundance.heic",
            "id": 8,
            "dimensions": "10\"x8\""
        },
        // {
        //     "title": "Luminous Beings We Are",
        //     "desc": "A sleeping polar bear rests peacefully against a patterned, collaged background with the titular phrase subtly inscribed. What inner light shines even in repose? This piece combines animal grace with a touch of the profound.",
        //     "medium": "Collage on panel",
        //     "tags": "collage, animal, polar bear, sleeping, pattern, text, black and white, gray",
        //     "date": "2019",
        //     "image": "/images/art/.heic",
        //     "id": 9
        // },
        // {
        //     "title": "The View from Above",
        //     "desc": "A white bird soars over a collaged map, merging patterned landscapes with acrylic flight. Can miracles replace fear when we gain a higher perspective? An invitation to see the world anew.",
        //     "medium": "Acrylic on Canvas",
        //     "tags": "bird, flight, map, green, collage, pattern, acrylic, aerial view",
        //     "date": "2020",
        //     "image": "/images/art/.heic",
        //     "id": 10
        // },
        {
            "title": "Intelligent Observation",
            "desc": "A bold, graphic bird surveys a miniature cityscape, a heart floating nearby against a textured, newsprint background. What does the silent observer understand? A mixed-media commentary on watching the world.",
            "medium": "Mixed media on panel",
            "tags": "bird, crow, heart, houses, city, observation, collage, mixed media, black, pink",
            "date": "2023",
            "image": "/images/art/observation.heic",
            "id": 11,
            "dimensions": "12\"x9\""
        },
        {
            "title": "Crow Chatter",
            "desc": "Two stylized crows face each other, beaks nearly touching, amidst a backdrop of energetic patterns. What secrets are shared in the language of crows? A playful yet intimate mixed-media piece.",
            "medium": "Mixed media on panel",
            "tags": "birds, crows, pair, black and white, pattern, mixed media, chatter",
            "date": "2023",
            "image": "/images/art/chatter.heic",
            "id": 12,
            "dimensions": "11.5\"x13.5\""
        },
        {
            "title": "Make Believe with Dad",
            "desc": "A whimsical stack of patterned teacups dominates a vibrant red, textured background. Can simple objects evoke cherished memories? This piece, titled 'Tea time', hints at childhood nostalgia.",
            "medium": "Mixed media on panel",
            "tags": "teacups, stack, red, white, pattern, mixed media, tea time, childhood",
            "date": "2024",
            "image": "/images/art/believe.heic",
            "id": 13,
            "dimensions": "8\"x6\""
        },
        {
            "title": "Posted letters from the past",
            "desc": "A collage of vintage envelopes, stamps, and handwritten notes evokes a bygone era of correspondence. What stories linger in these forgotten messages? A nostalgic journey through 'posted letters from the past'.",
            "medium": "Mixed media on panel",
            "tags": "collage, letters, envelopes, stamps, mail, past, vintage, mixed media",
            "date": "2024",
            "image": "/images/art/letters.heic",
            "id": 14,
            "dimensions": "14\"x14\""
        },
        {
            "title": "Crazy Cat Ladies Vote",
            "desc": "This mixed media piece likely uses feline imagery and text to make a playful political statement. Who says cats and civic duty don't mix? A declaration that 'Crazy Cat Ladies Vote'.",
            "medium": "Mixed media on panel",
            "tags": "cats, vote, political, text, collage, mixed media",
            "date": "2024",
            "image": "/images/art/vote.heic",
            "id": 15,
            "dimensions": "6\"x8\""
        },
        {
            "title": "The World Needs Love",
            "desc": "Fragments of sheet music and the iconic lyric anchor this mixed media piece. Is this simple sentiment more urgent now than ever? An artistic affirmation that 'WHAT THE WORLD NEEDS NOW IS LOVE'.",
            "medium": "Mixed media on panel",
            "tags": "love, world, music sheet, text, collage, mixed media, song lyrics",
            "date": "2024",
            "image": "/images/art/love.heic",
            "id": 16,
            "dimensions": "6\"x6\""
        },
        // {
        //     "title": "Women's Rights are Human Rights",
        //     "desc": "Collaged text and imagery likely combine to deliver a powerful message on equality. How can art amplify essential truths? This piece stands as a visual declaration: 'Women's Rights are Human Rights'.",
        //     "medium": "Mixed Media",
        //     "tags": "womens rights, human rights, political, social commentary, text, collage, mixed media",
        //     "date": "2025",
        //     "image": "/images/art/.heic",
        //     "id": 17
        // },
        {
            "title": "Arise",
            "desc": "The imperative 'ARISE' dominates, suggesting empowerment and action, likely focused on women's rights. What does it mean to rise up? A call to action rendered in mixed media.",
            "medium": "Mixed Media",
            "tags": "arise, womens rights, political, social commentary, text, collage, mixed media",
            "date": "2025",
            "image": "/images/art/arise.heic",
            "id": 18,
            "dimensions": "18\"x18\""
        },
        {
            "title": "The Other 'F' Word Feminism",
            "desc": "This piece directly confronts perceptions, reclaiming 'Feminism' through mixed media on paper. Can art challenge stigma and redefine loaded terms? Exploring 'The Other 'F' Word'.",
            "medium": "Mixed media on paper",
            "tags": "feminism, f word, political, social commentary, text, collage, mixed media",
            "date": "2025",
            "image": "/images/art/feminism.heic",
            "id": 19,
            "dimensions": "12.5\"x8\""
        },
        {
            "title": "Stand Strong",
            "desc": "A message of resilience conveyed through mixed media and collage. What gives us the power to 'Stand Strong' in challenging times? An affirmation of inner strength.",
            "medium": "Mixed media/collage",
            "tags": "stand strong, political, social commentary, text, collage, mixed media",
            "date": "2025",
            "image": "/images/art/stand.heic",
            "id": 20,
            "dimensions": "12.5\"x11.5\""
        },
        {
            "title": "Light Amidst the Chaos",
            "desc": "Abstract forms likely contrast darkness and illumination in this mixed media work. Where can we find 'Light Amidst the Chaos'? A visual exploration of hope and turmoil.",
            "medium": "Mixed media",
            "tags": "light, chaos, abstract, hope, mixed media",
            "date": "2025",
            "image": "/images/art/light.heic",
            "id": 21,
            "dimensions": "10\"x10\""
        },
        {
            "title": "They have been 'disappeared'",
            "desc": "Text fragments hint at themes of loss, government action, and perhaps time, possibly referencing political disappearances. How does art bear witness to the unspoken? A haunting mixed media piece.",
            "medium": "Mixed media",
            "tags": "disappeared, political, human rights, social commentary, text, collage, mixed media, queer",
            "date": "2025",
            "image": "/images/art/disappeared.heic",
            "id": 22,
            "dimensions": "14\"x14\""
        },
        {
            "title": "tRUMP",
            "desc": "This mixed media work directly references a political figure. How does contemporary art engage with polarizing leaders? A concise commentary.",
            "medium": "Mixed media",
            "tags": "trump, political, social commentary, text, collage, mixed media",
            "date": "2025",
            "image": "/images/art/trump.heic",
            "id": 23,
            "dimensions": "11\"x14\""
        }
        // {
        //     "title": "Tara",
        //     "desc": "A Tibetan Thangka drawing depicting the 'Venerable Mother of Liberation'. How does traditional iconography convey spiritual concepts like 'Star' and liberation? A devotional piece rendered with intricate detail.",
        //     "medium": "Tibetan Thangka drawing",
        //     "tags": "Tara, Buddhism, deity, mother, liberation, star, thangka, drawing, spiritual, religious",
        //     "date": "2001",
        //     "image": "/images/art/.heic",
        //     "id": 24
        // },
        // {
        //     "title": "Sacred Geometry - Buddha",
        //     "desc": "Intricate pencil work explores the intersection of Buddhist imagery and the universal patterns of 'Sacred Geometry'. Can mathematical forms reveal spiritual truths? A detailed study in pattern and faith.",
        //     "medium": "Pencil on paper",
        //     "tags": "sacred geometry, Buddha, Buddhism, drawing, pencil, spiritual, religious, pattern",
        //     "date": "2000",
        //     "image": "/images/art/.heic",
        //     "id": 25
        // },
        // {
        //     "title": "Dubrovnik",
        //     "desc": "A pen, ink, and watercolor sketch captures the distinctive architecture of the Croatian city. Can a few lines and washes transport you to another place? A traveler's impression of Dubrovnik.",
        //     "medium": "Pen, ink and watercolor on paper",
        //     "tags": "Dubrovnik, Croatia, cityscape, architecture, travel, pen, ink, watercolor",
        //     "date": "1979",
        //     "image": "/images/art/.heic",
        //     "id": 26
        // }
    ],

    demoData: [
        {
            title: "Art as Activism",
            desc: "Bold acrylics clash and merge with fragments of newspaper headlines, transforming current events into a visceral call for awareness. This piece asks, 'If art cannot speak truth to power, what force remains?' It's a dialogue between the artist's hand and the pulse of the world.",
            medium: "Acrylic and Newspaper Collage on Canvas",
            tags: "activism, protest, collage, acrylic, newspaper, political, social commentary, abstract, contemporary",
            date: "2018",
            image: "/images/art/art1.jpg",
            id:0,
        },
        {
            title: "Whispers of Serendipity",
            desc: "Layers of translucent encaustic veil and reveal unexpected color harmonies, mimicking the way meaning emerges from chance encounters. Subtle shifts suggest hidden patterns just below the surface. It captures that feeling of 'Was this coincidence, or connection?'",
            medium: "Encaustic and Pigment Stick on Wood Panel",
            tags: "serendipity, synchronicity, abstract, encaustic, wax, texture, layers, subtle, spiritual, connection",
            date: "2020",
            image: "/images/art/art2.jpg",
            id:1,
        },
        {
            title: "Empowered Fragments",
            desc: "Torn magazine images and resilient acrylic textures converge, building a new whole stronger and more complex than its original parts. This piece celebrates the power found in reclaiming disparate pieces of one's story. As Hunt says, 'We are all mosaics in progress.'",
            medium: "Mixed Media Collage (Magazine, Acrylic) on Board",
            tags: "empowerment, collage, mixed media, texture, abstract, feminist, resilience, narrative, fragments",
            date: "2015",
            image: "/images/art/art3.jpg",
            id:2,
        },
        {
            title: "Silent March",
            desc: "Though abstract, stark vertical forms rendered in deep, resonant acrylics evoke a sense of collective movement and quiet determination. It's a tribute to the unspoken power of solidarity. The weight of the moment is felt in the density of the paint.",
            medium: "Acrylic Impasto on Canvas",
            tags: "protest, activism, abstract, acrylic, texture, impasto, vertical, solidarity, contemporary, minimal",
            date: "2019",
            image: "/images/art/art4.jpg",
            id:3,
        },
        {
            title: "Synchronous Bloom",
            desc: "Unexpected connections align like petals suspended and unfolding within layers of warm wax. Found botanicals embedded within speak to the surprising beauty revealed in moments of perfect, unplanned timing. Nature's serendipity meets the artist's intention.",
            medium: "Encaustic, Dried Botanicals, and Acrylic on Wood Panel",
            tags: "synchronicity, serendipity, encaustic, wax, botanicals, mixed media, abstract, nature, beauty, connection, texture",
            date: "2021",
            image: "/images/art/art5.jpg",
            id:4,
        },
        {
            title: "Layered Histories",
            desc: "Thick impasto and scraped-back encaustic reveal glimpses of buried text and obscured imagery, echoing how personal and collective histories overlay and inform the present. 'We build upon the foundations left behind,' the textures seem to whisper.",
            medium: "Acrylic, Encaustic, and Found Paper Collage on Panel",
            tags: "history, memory, layers, texture, abstract, mixed media, acrylic, encaustic, found objects, narrative, palimpsest",
            date: "2016",
            image: "/images/art/art6.jpg",
            id:5,
        },
        {
            title: "Rising Voice",
            desc: "Jagged forms and vibrant acrylic colors burst through muted, textured backgrounds, representing the emergence of a powerful voice against suppression. It's a visual shout, demanding to be seen and heard in its own right. The energy is palpable.",
            medium: "Acrylic and Multimedia Collage on Canvas",
            tags: "empowerment, protest, voice, abstract, collage, mixed media, acrylic, vibrant, contemporary, energy",
            date: "2022",
            image: "/images/art/art7.jpg",
            id:6,
        },
        {
            title: "Chance Configuration",
            desc: "Found metal objects, perhaps discarded and overlooked, find surprising harmony nestled within the smooth, luminous encaustic surface. This piece explores the accidental beauty born from juxtaposing disparate elements. It's a quiet nod to kismet and potential.",
            medium: "Encaustic and Found Metal Objects on Wood Panel",
            tags: "serendipity, chance, abstract, encaustic, wax, found objects, metal, mixed media, texture, harmony, industrial",
            date: "2017",
            image: "/images/art/art8.jpg",
            id:7,
        },
        {
            title: "Woven Resistance",
            desc: "Threads of resistance are literally integrated into the fabric of this piece, bound by layers of wax and gestural paint strokes. It speaks to the enduring strength found in collective action and shared struggle. Each thread contributes to the whole.",
            medium: "Acrylic, Fabric Scraps, and Encaustic on Panel",
            tags: "resistance, protest, empowerment, mixed media, fabric, encaustic, acrylic, texture, abstract, community, woven",
            date: "2014",
            image: "/images/art/art9.jpg",
            id:8,
        },
        {
            title: "Echoes of Truth",
            desc: "Faded photographs and fragmented newsprint whisper stories beneath veils of acrylic and wax. The work confronts the way 'official' truth can be obscured or manipulated, yet still resonates. History leaves echoes, if we listen.",
            medium: "Multimedia Collage (Newspaper, Photos), Acrylic, Encaustic",
            tags: "truth, history, activism, collage, mixed media, newspaper, photography, abstract, memory, political, layers",
            date: "2019",
            image: "/images/art/art10.jpg",
            id:9,
        },
        {
            title: "Serendipity's Map",
            desc: "Ink lines trace unpredictable paths across a luminous wax landscape, suggesting a map drawn by chance encounters and fortunate discoveries. It celebrates the beauty of life's unplanned detours and intuitive navigation. Where will chance lead next?",
            medium: "Encaustic and Ink Transfer on Wood Panel",
            tags: "serendipity, synchronicity, map, journey, abstract, encaustic, wax, ink transfer, lines, spiritual, navigation",
            date: "2023",
            image: "/images/art/art11.jpg",
            id:10,
        },
        {
            title: "Unbound",
            desc: "Thick, energetic strokes of acrylic seem to break free from unseen constraints, partially covered by defiant gestures in wax. This piece is a visceral expression of liberation and shedding limitations. As the artist notes, 'To be unbound is to be truly alive.'",
            medium: "Acrylic Impasto and Encaustic on Canvas",
            tags: "empowerment, liberation, freedom, abstract, acrylic, impasto, encaustic, texture, bold, energy, expressive",
            date: "2020",
            image: "/images/art/art12.jpg",
            id:11,
        },
        {
            title: "Fragmented Headlines II",
            desc: "Building on earlier themes, news headlines are intentionally fractured and reassembled, creating a disjointed yet potent commentary on media narratives. Layers of wax selectively obscure and highlight, urging a closer, critical look at the information we consume.",
            medium: "Newspaper Collage, Acrylic, and Encaustic on Panel",
            tags: "protest, activism, media, social commentary, collage, newspaper, acrylic, encaustic, abstract, political, fragments, information",
            date: "2021",
            image: "/images/art/art13.jpg",
            id:12,
        },
    ],

    event:{
        name: "\"Retrospective\"",
        time: "5 - 8pm, May 9th 2025",
        artist:"Margaret Hunt",
        address:"221 B Gallery | 221 Nona Avenue",
        location:"Trinidad, Colorado",
        aboutShort:"Retrospective: A unique opportunity in Trinidad to trace the artistic path of renowned Colorado artist and leader, Margaret Hunt, from early explorations to current works.",
        aboutMed:"Embark on a visual journey with Retrospective, an intimate exhibition showcasing the artistic evolution of Margaret Hunt. From formative pieces to recent explorations, this curated selection offers insight into the progression of her techniques, themes, and unique creative voice. Witness the development of an accomplished Colorado artist whose work has graced galleries and public spaces, presented here in Trinidad.",
        aboutFull:"Immerse yourself in Retrospective, a comprehensive look at the dedicated artistic practice of Margaret Hunt. Presented in Trinidad, this unique exhibition charts a course through Hunt's creative evolution, offering a timeline of her visual explorations and accomplishments. While widely recognized for her leadership as Director of Colorado Creative Industries, Hunt has simultaneously maintained a distinct and evolving artistic voice, earning numerous awards and exhibiting in venues from Denver galleries to the Salt Lake City International Airport.\n\nRetrospective brings together selections that illustrate the shifts in her focus, the refinement of her technique, and the enduring inquiries within her work. Join us to experience the breadth of Margaret Hunt's artistic journey and gain a deeper appreciation for the creative spirit that fuels both her celebrated artwork and her impactful advocacy across Colorado."
    },
    artist:{
        quote:"If we want our dreams to come true, the first thing we must do is wake up.",
        aboutFull:"Discover the creative vision of Margaret Hunt, an accomplished and award-winning visual artist whose work offers unique perspectives. Her distinct artwork has been selected for prominent display in venues such as the Salt Lake City International Airport and has been featured in Denver galleries like Olio. Margaret's active artistic practice provides a deep, firsthand understanding of the creative journey, enriching her well-regarded efforts within the broader arts community. Engage with the insights of this multifaceted creator during our event."
    }
}
export default data;