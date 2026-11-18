import { site } from './site';
export interface LocalAssignment { layout: 'rail' | 'field-note' | 'pair' | 'rows'; clips: string[]; title: string; context: string; }
export const localClips = [
  {
    "slug": "excavation-detail",
    "title": "Excavation work in progress",
    "duration": 3,
    "width": 480,
    "height": 400,
    "video": "excavation-detail.mp4",
    "poster": "excavation-detail.webp",
    "uploadDate": "2026-11-18T07:36:09Z",
    "caption": "Digging is underway in an open trench beside a brick wall, with an orange hose nearby. The close view shows the working space around the exposed ground during excavation.",
    "serviceHref": "/services/drain-repairs/",
    "serviceLabel": "Explore drain repair planning"
  },
  {
    "slug": "drain-access-setup",
    "title": "Drain-access equipment on site",
    "duration": 7,
    "width": 480,
    "height": 388,
    "video": "drain-access-setup.mp4",
    "poster": "drain-access-setup.webp",
    "uploadDate": "2026-11-18T07:36:09Z",
    "caption": "Drain access equipment, a hose reel and tools are set out on a wet paved driveway beside a house. The footage shows how equipment occupies the approach to the work area.",
    "serviceHref": "/services/cctv-drain-inspections/",
    "serviceLabel": "Explore drain assessment"
  },
  {
    "slug": "team-on-site",
    "title": "Meet the team on site",
    "duration": 7,
    "width": 480,
    "height": 848,
    "video": "team-on-site.mp4",
    "poster": "team-on-site.webp",
    "uploadDate": "2026-11-18T07:36:09Z",
    "caption": "A team member introduces the crew beside a house, with a hose reel and drain access equipment on the driveway. This on-site view shows the people and working setup together.",
    "serviceHref": "/services/sewer-drain-blockages/",
    "serviceLabel": "Explore drain assessment"
  },
  {
    "slug": "drain-work-montage",
    "title": "Drainage work and access",
    "duration": 13,
    "width": 480,
    "height": 848,
    "video": "drain-work-montage.mp4",
    "poster": "drain-work-montage.webp",
    "uploadDate": "2026-11-18T07:36:09Z",
    "caption": "This montage moves between equipment inside a bathroom, outdoor drain access and team members working around homes. The different scenes show how access and equipment placement vary between working areas.",
    "serviceHref": "/services/sewer-drain-blockages/",
    "serviceLabel": "Explore drain assessment"
  }
];
export const localAssignments: Record<string, LocalAssignment> = {
  "hornsby": {
    "layout": "pair",
    "clips": [
      "team-on-site",
      "drain-work-montage"
    ],
    "title": "The team and drainage access",
    "context": "When arranging a Hornsby drain visit, explain the affected fixtures and who can provide access. These views show the team and equipment working around residential properties."
  },
  "gordon": {
    "layout": "rail",
    "clips": [
      "drain-access-setup"
    ],
    "title": "Making room for drain equipment",
    "context": "For a slow waste in Gordon, tell us which fixtures are affected and how the team can reach them. Equipment choice follows the assessment and available access."
  },
  "turramurra": {
    "layout": "field-note",
    "clips": [
      "excavation-detail"
    ],
    "title": "Access for drainage excavation",
    "context": "For Turramurra properties with recurring root problems, clearing and repair are separate decisions. Describe the route to the affected line when discussing an assessment."
  },
  "east-lindfield": {
    "layout": "rows",
    "clips": [
      "excavation-detail",
      "drain-access-setup"
    ],
    "title": "From equipment access to excavation",
    "context": "When planning drainage work in East Lindfield, explain gates, steps and the route beside the building. These working views help show why equipment access matters before a repair is agreed."
  },
  "waitara": {
    "layout": "rail",
    "clips": [
      "drain-access-setup"
    ],
    "title": "Making room for drain equipment",
    "context": "For a slow waste in Waitara, tell us which fixtures are affected and how the team can reach them. Equipment choice follows the assessment and available access."
  },
  "lindfield": {
    "layout": "pair",
    "clips": [
      "team-on-site",
      "drain-work-montage"
    ],
    "title": "The team and drainage access",
    "context": "When arranging a Lindfield drain visit, explain the affected fixtures and who can provide access. These views show the team and equipment working around residential properties."
  },
  "roseville": {
    "layout": "rail",
    "clips": [
      "drain-access-setup"
    ],
    "title": "Making room for drain equipment",
    "context": "For a slow waste in Roseville, tell us which fixtures are affected and how the team can reach them. Equipment choice follows the assessment and available access."
  },
  "killara": {
    "layout": "field-note",
    "clips": [
      "excavation-detail"
    ],
    "title": "Access for drainage excavation",
    "context": "For Killara properties with recurring root problems, clearing and repair are separate decisions. Describe the route to the affected line when discussing an assessment."
  },
  "pymble": {
    "layout": "pair",
    "clips": [
      "team-on-site",
      "drain-work-montage"
    ],
    "title": "The team and drainage access",
    "context": "When arranging a Pymble drain visit, explain the affected fixtures and who can provide access. These views show the team and equipment working around residential properties."
  },
  "warrawee": {
    "layout": "field-note",
    "clips": [
      "excavation-detail"
    ],
    "title": "Access for drainage excavation",
    "context": "For Warrawee properties with recurring root problems, clearing and repair are separate decisions. Describe the route to the affected line when discussing an assessment."
  },
  "north-turramurra": {
    "layout": "rows",
    "clips": [
      "excavation-detail",
      "drain-access-setup"
    ],
    "title": "From equipment access to excavation",
    "context": "When planning drainage work in North Turramurra, explain gates, steps and the route beside the building. These working views help show why equipment access matters before a repair is agreed."
  },
  "st-ives": {
    "layout": "pair",
    "clips": [
      "team-on-site",
      "drain-work-montage"
    ],
    "title": "The team and drainage access",
    "context": "When arranging a St Ives drain visit, explain the affected fixtures and who can provide access. These views show the team and equipment working around residential properties."
  },
  "asquith": {
    "layout": "pair",
    "clips": [
      "team-on-site",
      "drain-work-montage"
    ],
    "title": "The team and drainage access",
    "context": "When arranging a Asquith drain visit, explain the affected fixtures and who can provide access. These views show the team and equipment working around residential properties."
  },
  "wahroonga": {
    "layout": "pair",
    "clips": [
      "team-on-site",
      "drain-work-montage"
    ],
    "title": "The team and drainage access",
    "context": "When arranging a Wahroonga drain visit, explain the affected fixtures and who can provide access. These views show the team and equipment working around residential properties."
  },
  "east-killara": {
    "layout": "rows",
    "clips": [
      "excavation-detail",
      "drain-access-setup"
    ],
    "title": "From equipment access to excavation",
    "context": "When planning drainage work in East Killara, explain gates, steps and the route beside the building. These working views help show why equipment access matters before a repair is agreed."
  },
  "roseville-chase": {
    "layout": "rows",
    "clips": [
      "excavation-detail",
      "drain-access-setup"
    ],
    "title": "From equipment access to excavation",
    "context": "When planning drainage work in Roseville Chase, explain gates, steps and the route beside the building. These working views help show why equipment access matters before a repair is agreed."
  },
  "st-ives-chase": {
    "layout": "field-note",
    "clips": [
      "excavation-detail"
    ],
    "title": "Access for drainage excavation",
    "context": "For St Ives Chase properties with recurring root problems, clearing and repair are separate decisions. Describe the route to the affected line when discussing an assessment."
  },
  "south-turramurra": {
    "layout": "pair",
    "clips": [
      "team-on-site",
      "drain-work-montage"
    ],
    "title": "The team and drainage access",
    "context": "When arranging a South Turramurra drain visit, explain the affected fixtures and who can provide access. These views show the team and equipment working around residential properties."
  },
  "north-wahroonga": {
    "layout": "pair",
    "clips": [
      "team-on-site",
      "drain-work-montage"
    ],
    "title": "The team and drainage access",
    "context": "When arranging a North Wahroonga drain visit, explain the affected fixtures and who can provide access. These views show the team and equipment working around residential properties."
  },
  "west-pymble": {
    "layout": "field-note",
    "clips": [
      "excavation-detail"
    ],
    "title": "Access for drainage excavation",
    "context": "For West Pymble properties with recurring root problems, clearing and repair are separate decisions. Describe the route to the affected line when discussing an assessment."
  }
};
export function localVideoSchema(assignment: LocalAssignment, path: string) { return assignment.clips.map(slug => { const c = localClips.find(c => c.slug === slug)!; return { '@type':'VideoObject', '@id':new URL(path,site.url).href+'#'+c.slug, name:c.title,description:c.caption,thumbnailUrl:new URL('/projects/local/'+c.poster,site.url).href,contentUrl:new URL('/projects/local/'+c.video,site.url).href,uploadDate:c.uploadDate,duration:'PT'+c.duration+'S',creator:{'@type':'Organization',name:site.operator},isPartOf:{'@id':new URL(path,site.url).href+'#webpage'} }; }); }
