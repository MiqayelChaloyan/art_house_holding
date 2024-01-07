import ArrayMaxItems from "@/utils/ArrayMaxItems";
import { defineArrayMember } from "sanity";

const home_content = {
    name: 'home',
    type: 'document',
    title: 'Home',
    fields: [
        {
            name: 'our_websites',
            type: 'array',
            title: 'Websites',
            // description: 'Դուք կարող եք ավելացնել ցանկացած թվով նկարներ, առնվազն երկու հատ',
            of: [
                {
                    name: 'object',
                    type: 'object',
                    fields: [
                        {
                            title: 'Website Title',
                            name: 'web_site_title',
                            type: 'object',
                            validation: (Rule: any) => Rule.required(),
                            fields: [
                                {
                                    title: 'Armenian',
                                    name: 'am',
                                    type: 'string'
                                },
                                {
                                    title: 'English',
                                    name: 'en',
                                    type: 'string'
                                },
                                {
                                    title: 'Russian',
                                    name: 'ru',
                                    type: 'string'
                                }
                            ]
                        },
                        {
                            title: 'Website Logo',
                            name: 'website_logo',
                            type: 'image',
                            options: { hotspot: true },
                            fields: [
                                {
                                    name: 'alt',
                                    title: 'Alt',
                                    type: 'string'
                                }
                            ]
                        },
                        {
                            name: 'slug',
                            type: 'slug',
                            description: "Պիտի եզակի լինի",
                            options: {
                                source: 'name',
                            },
                            validation: (Rule: any) => Rule.required(),
                        },
                        {
                            name: 'web_site_url',
                            title: 'Website url',
                            type: 'string',
                            validation: (Rule: any) => Rule.required(),
                        },
                    ]
                }
            ],
        },
        {
            name: 'progress_section',
            type: 'array',
            title: 'Progress Section',
            components: { input: ArrayMaxItems },
            validation: (Rule: any) => Rule.max(4),
            description: 'Ոչ պակաս, քան չորս և ոչ ավելի, միայն դուք կարող եք դրանք փոփոխել',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'tag',
                    fields: [
                        {
                            title: 'Title',
                            name: 'title',
                            type: 'object',
                            validation: (Rule: any) => Rule.required(),
                            fields: [
                                {
                                    title: 'Armenian',
                                    name: 'am',
                                    type: 'string'
                                },
                                {
                                    title: 'English',
                                    name: 'en',
                                    type: 'string'
                                },
                                {
                                    title: 'Russian',
                                    name: 'ru',
                                    type: 'string'
                                }
                            ]
                        },
                        {
                            name: 'slug',
                            type: 'slug',
                            description: "Պիտի եզակի լինի",
                            options: {
                                source: 'name',
                            },
                            validation: (Rule: any) => Rule.required(),
                        },
                        {
                            title: 'Quantity',
                            name: 'quantity',
                            type: 'number',
                            initialValue: 0,
                            validation: (Rule: any) => Rule.required(),
                        },
                    ]
                })
            ]
        },
        {
            name: 'co_workers',
            type: 'array',
            title: 'Co-workers',
            description: 'Դուք կարող եք ավելացնել ցանկացած թվով նկարներ',
            of: [
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                        },
                        {
                            name: 'slug',
                            type: 'slug',
                            description: "Պիտի եզակի լինի",
                            options: {
                                source: 'name',
                            },
                            validation: (Rule: any) => Rule.required(),
                        },
                    ],
                },
            ],
            options: {
                layout: 'grid',
            },
        },
    ],
};

export default home_content;

