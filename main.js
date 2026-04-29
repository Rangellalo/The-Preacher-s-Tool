/* The Preacher's Tool - Obsidian Plugin */
var g=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var W=Object.prototype.hasOwnProperty;var N=(t,e)=>{for(var a in e)g(t,a,{get:e[a],enumerable:!0})},M=(t,e,a,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let d of F(e))!W.call(t,d)&&d!==a&&g(t,d,{get:()=>e[d],enumerable:!(n=D(e,d))||n.enumerable});return t};var E=t=>M(g({},"__esModule",{value:!0}),t);var L={};N(L,{default:()=>T});module.exports=E(L);var B=require("obsidian");var o=require("obsidian"),k={defaultSermonPalette:"tpt-palette-standard",defaultWorkbookPalette:"tpt-palette-parchment",defaultStudyPalette:"tpt-palette-standard",defaultHeadingFont:"tpt-heading-georgia",defaultBodyFont:"tpt-font-system",defaultSermonLayout:"tpt-mode-study",defaultWorkbookLayout:"tpt-mode-study",defaultStudyLayout:"tpt-mode-study",defaultSpeaker:"Ed Rangel",defaultAuthor:"Ed Rangel",defaultLocation:"Waupaca Church of Christ",defaultBibleVersion:"NASB 1995",insertDateInFrontmatter:!0,preserveCleanMarkdown:!0},y=class extends o.PluginSettingTab{constructor(e,a){super(e,a),this.plugin=a}display(){let{containerEl:e}=this;e.empty(),e.createEl("h2",{text:"The Preacher's Tool \u2014 Settings"}),e.createEl("p",{text:"Workflow settings for sermons, Bible studies, workbook modules, and print/export preparation.",cls:"tpt-settings-description"}),e.createEl("h3",{text:"Identity",cls:"tpt-settings-heading"}),new o.Setting(e).setName("Default Speaker").setDesc("Used in sermon frontmatter.").addText(a=>a.setPlaceholder("Ed Rangel").setValue(this.plugin.settings.defaultSpeaker).onChange(async n=>{this.plugin.settings.defaultSpeaker=n,await this.plugin.saveSettings()})),new o.Setting(e).setName("Default Author").setDesc("Used in study and workbook frontmatter.").addText(a=>a.setPlaceholder("Ed Rangel").setValue(this.plugin.settings.defaultAuthor).onChange(async n=>{this.plugin.settings.defaultAuthor=n,await this.plugin.saveSettings()})),new o.Setting(e).setName("Default Location").setDesc("Used in sermon and teaching frontmatter.").addText(a=>a.setPlaceholder("Waupaca Church of Christ").setValue(this.plugin.settings.defaultLocation).onChange(async n=>{this.plugin.settings.defaultLocation=n,await this.plugin.saveSettings()})),new o.Setting(e).setName("Default Bible Version").setDesc("Used as a frontmatter field.").addText(a=>a.setPlaceholder("NASB 1995").setValue(this.plugin.settings.defaultBibleVersion).onChange(async n=>{this.plugin.settings.defaultBibleVersion=n,await this.plugin.saveSettings()})),e.createEl("h3",{text:"Default Presets",cls:"tpt-settings-heading"}),new o.Setting(e).setName("Sermon Default Palette").addDropdown(a=>a.addOption("tpt-palette-standard","Standard \u2014 Navy Gold").addOption("tpt-palette-midnight","Night Watch \u2014 Midnight Amber").addOption("tpt-palette-parchment","Scroll Ink \u2014 Parchment").addOption("tpt-palette-burgundy","Calvary Stone \u2014 Burgundy").setValue(this.plugin.settings.defaultSermonPalette).onChange(async n=>{this.plugin.settings.defaultSermonPalette=n,await this.plugin.saveSettings()})),new o.Setting(e).setName("Workbook Default Palette").addDropdown(a=>a.addOption("tpt-palette-parchment","Scroll Ink \u2014 Parchment").addOption("tpt-palette-standard","Standard \u2014 Navy Gold").addOption("tpt-palette-olivepress","Olive Press \u2014 Linen").addOption("tpt-palette-sepia","Scribe's Lamp \u2014 Sepia").setValue(this.plugin.settings.defaultWorkbookPalette).onChange(async n=>{this.plugin.settings.defaultWorkbookPalette=n,await this.plugin.saveSettings()})),new o.Setting(e).setName("Study Default Palette").addDropdown(a=>a.addOption("tpt-palette-standard","Standard \u2014 Navy Gold").addOption("tpt-palette-parchment","Scroll Ink \u2014 Parchment").addOption("tpt-palette-sepia","Scribe's Lamp \u2014 Sepia").setValue(this.plugin.settings.defaultStudyPalette).onChange(async n=>{this.plugin.settings.defaultStudyPalette=n,await this.plugin.saveSettings()})),e.createEl("h3",{text:"Typography",cls:"tpt-settings-heading"}),new o.Setting(e).setName("Default Heading Font").addDropdown(a=>a.addOption("tpt-heading-georgia","Georgia").addOption("tpt-heading-times","Times New Roman").addOption("tpt-heading-garamond","Garamond").addOption("tpt-heading-lexicon","Lexicon").addOption("tpt-heading-minion","Minion Pro").addOption("tpt-heading-match-body","Match Body Font").setValue(this.plugin.settings.defaultHeadingFont).onChange(async n=>{this.plugin.settings.defaultHeadingFont=n,await this.plugin.saveSettings()})),new o.Setting(e).setName("Default Body Font").addDropdown(a=>a.addOption("tpt-font-system","System Default").addOption("tpt-font-serif","Serif (Georgia/Times)").addOption("tpt-font-sans","Sans-Serif").addOption("tpt-font-classic","Classic (Palatino)").addOption("tpt-font-lexicon","Lexicon").addOption("tpt-font-minion","Minion Pro").setValue(this.plugin.settings.defaultBodyFont).onChange(async n=>{this.plugin.settings.defaultBodyFont=n,await this.plugin.saveSettings()})),e.createEl("h3",{text:"Output Behavior",cls:"tpt-settings-heading"}),new o.Setting(e).setName("Preserve Clean Markdown").setDesc("Keep output clean for Obsidian, Pandoc, DOCX, PDF, and web publishing.").addToggle(a=>a.setValue(this.plugin.settings.preserveCleanMarkdown).onChange(async n=>{this.plugin.settings.preserveCleanMarkdown=n,await this.plugin.saveSettings()})),new o.Setting(e).setName("Insert Date in Frontmatter").setDesc("Automatically insert today's date when creating new notes.").addToggle(a=>a.setValue(this.plugin.settings.insertDateInFrontmatter).onChange(async n=>{this.plugin.settings.insertDateInFrontmatter=n,await this.plugin.saveSettings()}))}};var s=require("obsidian");var f=require("obsidian");async function i(t,e){let a=t.workspace.getActiveViewOfType(f.MarkdownView);if(!a){new f.Notice("No active Markdown editor found.");return}a.editor.replaceSelection(e)}async function u(t,e,...a){await t.fileManager.processFrontMatter(e,n=>{let d=n.cssclasses,b=[];Array.isArray(d)?b=d:typeof d=="string"&&(b=[d]),n.cssclasses=Array.from(new Set([...b,...a]))})}function r(){return new Date().toISOString().slice(0,10)}function l(t){let e=["---"];return t.title!==void 0&&e.push(`title: "${t.title}"`),t.date!==void 0&&e.push(`date: ${t.date}`),t.series!==void 0&&e.push(`series: "${t.series}"`),t.text!==void 0&&e.push(`text: "${t.text}"`),t.speaker!==void 0&&e.push(`speaker: ${t.speaker}`),t.author!==void 0&&e.push(`author: ${t.author}`),t.location!==void 0&&e.push(`location: ${t.location}`),t.bibleVersion!==void 0&&e.push(`bibleversion: ${t.bibleVersion}`),t.type!==void 0&&e.push(`type: ${t.type}`),t.status!==void 0&&e.push(`status: ${t.status}`),t.tags&&t.tags.length>0&&(e.push("tags:"),t.tags.forEach(a=>e.push(`  - ${a}`))),t.cssclasses&&t.cssclasses.length>0&&(e.push("cssclasses:"),t.cssclasses.forEach(a=>e.push(`  - ${a}`))),t.extra&&Object.entries(t.extra).forEach(([a,n])=>e.push(`${a}: ${n}`)),e.push("---"),e.join(`
`)}var c={scriptureBlock:`> [!scripture]
> **Text:** 
> *Version:*

`,wordStudyBox:`| Word | Original | Meaning | Use in Text |
|------|----------|---------|-------------|
| | | | |

`,crossReferenceBox:`| Text | Connection |
|------|------------|
| | |
| | |

`,invitationDrive:`## Conclusion

**Summary Statement:**

**Call to Action:**

**Invitation Drive:**

> *"..."*

`,keyPointBlock:`> [!keypoint]
> **Main Point:**

`,illustrationBlock:`> [!illustration]
> **Story/Illustration:**

`};function _(t){return`${l({title:"",date:r(),series:"",text:"",speaker:t.speaker,location:t.location,bibleVersion:t.bibleVersion,type:"sermon",status:"draft",cssclasses:["tpt-sermon","tpt-sermon-live","tpt-mode-preaching",t.paletteClass,"tpt-heading-georgia","tpt-font-system","tpt-scripture-bar","tpt-wordstudy-simple","tpt-print-sermon"]})}

# Title

**Text:**
**Thesis:**

---

## Pulpit Outline

### I.

### II.

### III.

---

## Conclusion

**Summary:**

---

## Invitation Drive

---

## Word Study

| Word | Original | Meaning | Use in Text |
|------|----------|---------|-------------|
|      |          |         |             |

---

## Cross-References

| Text | Connection |
|------|------------|
|      |            |
`}function S(t){return`${l({title:"",date:r(),series:"",text:"",speaker:t.speaker,location:t.location,bibleVersion:t.bibleVersion,type:"sermon",status:"draft",cssclasses:["tpt-sermon","tpt-sermon-manuscript","tpt-mode-manuscript",t.paletteClass,"tpt-heading-georgia","tpt-font-serif","tpt-scripture-manuscript","tpt-wordstudy-lexicon","tpt-print-sermon"]})}

# Title

**Text:** | **Series:** | **Date:**

---

## Introduction

*(Opening illustration or hook)*

**Thesis:**

---

## Body

### I. First Point

> [!scripture]
> **Text:**
> *Version:*

*(Exposition)*

*(Application)*

---

### II. Second Point

> [!scripture]
> **Text:**
> *Version:*

*(Exposition)*

*(Application)*

---

### III. Third Point

> [!scripture]
> **Text:**
> *Version:*

*(Exposition)*

*(Application)*

---

## Conclusion

**Summary Statement:**

**Call to Action:**

---

## Invitation Drive

*(Final appeal)*

---

## Word Study

| Word | Original | Meaning | Use in Text |
|------|----------|---------|-------------|
|      |          |         |             |

---

## Cross-References

| Text | Connection |
|------|------------|
|      |            |
`}function w(t){return`${l({title:"",date:r(),series:"",text:"",speaker:t.speaker,location:t.location,bibleVersion:t.bibleVersion,type:"sermon",status:"draft",cssclasses:["tpt-sermon","tpt-sermon-short","tpt-mode-study",t.paletteClass,"tpt-heading-georgia","tpt-font-system","tpt-scripture-bar","tpt-print-sermon"]})}

# Title

**Text:** **Thesis:**

---

## Outline

1.
2.
3.

---

## Key Verse

> [!scripture]
> **Text:**

---

## Application

---

## Invitation
`}var m={lessonSection:`## Lesson Title

**Key Truth:**

**Scripture:**

---

`,workbookQuestions:`### Study Questions

1.
2.
3.
4.
5.

`,journalSection:`### Journal \u2014 Action Step

*What does this truth require of me?*

---

`,fillBlankBlock:`### Fill in the Blank

1. ____________ is ____________.
2. ____________ means ____________.
3. ____________ requires ____________.

`,answerField:`### Response

> *Write your answer here.*

`,keyTruthBlock:`> [!keytruth]
> **Key Truth:**

`};function P(t){return`${l({title:"",date:r(),series:"",text:"",author:t.author,bibleVersion:t.bibleVersion,type:"workbook-module",status:"draft",cssclasses:["tpt-workbook","tpt-workbook-module","tpt-mode-study",t.paletteClass,"tpt-heading-georgia","tpt-font-serif","tpt-scripture-study","tpt-wordstudy-workbook","tpt-print-workbook"]})}

# Workbook Module Title

**Series:** | **Lesson:**
**Key Truth:**

---

## Scripture Text

> [!scripture]
> **Text:**
> *Version:*

---

## Lesson Content

*(Teaching content here)*

---

## Word Study

| Word | Meaning | Importance |
|------|---------|------------|
|      |         |            |

---

## Study Questions

1.
2.
3.
4.
5.

---

## Fill in the Blank

1. ____________ is ____________.
2. ____________ means ____________.
3. ____________ requires ____________.

---

## Journal \u2014 Action Step

*What does this truth require of me?*

---

## Discussion Questions

1.
2.
3.
`}function C(t){return`${l({title:"",date:r(),series:"",author:t.author,bibleVersion:t.bibleVersion,type:"study-guide",status:"draft",cssclasses:["tpt-workbook","tpt-workbook-printable","tpt-mode-handout",t.paletteClass,"tpt-heading-georgia","tpt-font-serif","tpt-scripture-study","tpt-print-workbook","tpt-export-pdf-workbook"]})}

# Study Guide Title

**Series:** | **Lesson:** | **Date:**

---

## Key Scripture

> [!scripture]
> **Text:**

---

## Key Truth

> [!keytruth]
>

---

## Outline

1.
2.
3.

---

## Study Questions

1.
2.
3.
4.
5.

---

## Fill in the Blank

1. ____________ is ____________.
2. ____________ means ____________.

---

## Application

*What must I believe, obey, or practice?*

---

## For Further Study

| Text | Theme |
|------|-------|
|      |       |
`}var h={observationInterpretationApplication:`### Observation
*What does the text say?*
1.
2.
3.

### Interpretation
*What does the text mean?*
1.
2.
3.

### Application
*What must I believe, obey, correct, or practice?*
1.
2.
3.

`,scriptureComparisonTable:`| Text | Claim | Application |
|------|-------|-------------|
|      |       |             |
|      |       |             |

`,keyWordTable:`| Word | Meaning | Importance |
|------|---------|------------|
|      |         |            |

`,crossReferenceTable:`| Text | Connection |
|------|------------|
|      |            |
|      |            |

`,discussionQuestions:`### Discussion Questions

1.
2.
3.

`};function x(t){return`${l({title:"",date:r(),text:"",author:t.author,bibleVersion:t.bibleVersion,type:"inductive-study",status:"draft",cssclasses:["tpt-study","tpt-study-inductive","tpt-mode-study",t.paletteClass,"tpt-scripture-study","tpt-print-study"]})}

# Inductive Study \u2014 Title

**Text:** | **Version:**

---

## Observation
*What does the text say?*

1.
2.
3.

---

## Interpretation
*What does the text mean?*

1.
2.
3.

---

## Application
*What must I believe, obey, correct, or practice?*

1.
2.
3.

---

## Key Words

| Word | Meaning | Importance |
|------|---------|------------|
|      |         |            |

---

## Cross-References

| Text | Connection |
|------|------------|
|      |            |

---

## Discussion Questions

1.
2.
3.
`}function v(t){return`${l({title:"",date:r(),text:"",author:t.author,bibleVersion:t.bibleVersion,type:"verse-by-verse-study",status:"draft",cssclasses:["tpt-study","tpt-study-versebyverse","tpt-mode-study",t.paletteClass,"tpt-scripture-bar","tpt-wordstudy-lexicon","tpt-print-study"]})}

# Verse-by-Verse Study \u2014 Title

**Text:** | **Version:**

---

## Verse Analysis

> [!scripture]
> **v.1:**

*Notes:*

---

> [!scripture]
> **v.2:**

*Notes:*

---

## Word Studies

| Word | Original | Meaning | Use in Context |
|------|----------|---------|----------------|
|      |          |         |                |

---

## Discussion Questions

1.
2.
3.
`}function V(t){return`${l({title:"",date:r(),author:t.author,bibleVersion:t.bibleVersion,type:"topical-study",status:"draft",extra:{topic:'""'},cssclasses:["tpt-study","tpt-study-topical","tpt-mode-study",t.paletteClass,"tpt-scripture-study","tpt-print-study"]})}

# Topical Study \u2014 Title

**Topic:**

---

## Key Texts

| Text | Contribution |
|------|--------------|
|      |              |

---

## Biblical Claims

1.
2.
3.

---

## Common Misuses / Errors

1.
2.
3.

---

## Discussion Questions

1.
2.
3.
`}function I(t){return`${l({title:"",date:r(),text:"",author:t.author,bibleVersion:t.bibleVersion,type:"expository-study",status:"draft",cssclasses:["tpt-study","tpt-study-expository","tpt-mode-study",t.paletteClass,"tpt-scripture-manuscript","tpt-print-study"]})}

# Expository Study \u2014 Title

**Text:** | **Version:**

---

## Passage

> [!scripture]
> *(Paste full passage here)*

---

## Context

*(Historical, literary, grammatical)*

---

## Exposition

*(Section by section commentary)*

---

## Theological Significance

---

## Application

1.
2.
3.

---

## Discussion Questions

1.
2.
3.
`}function O(t){return`${l({title:"",date:r(),author:t.author,bibleVersion:t.bibleVersion,type:"doctrinal-study",status:"draft",extra:{doctrine:'""'},cssclasses:["tpt-study","tpt-study-doctrinal","tpt-mode-study",t.paletteClass,"tpt-scripture-study","tpt-wordstudy-academic","tpt-print-study"]})}

# Doctrinal Study \u2014 Title

**Doctrine:**

---

## Primary Texts

| Text | Teaching |
|------|----------|
|      |          |

---

## Word Study

| Word | Original | Meaning | Doctrinal Importance |
|------|----------|---------|----------------------|
|      |          |         |                      |

---

## Scripture Comparison

| Text | Claim | Application |
|------|-------|-------------|
|      |       |             |

---

## Biblical Claims

1.
2.
3.

---

## Discussion Questions

1.
2.
3.
`}async function p(t,e){let a=t.app.workspace.getActiveViewOfType(s.MarkdownView);if(!a){new s.Notice("No active Markdown note found.");return}a.editor.setValue(e)}function A(t){t.addCommand({id:"the-preachers-tool:new-live-preaching-outline",name:"TPT Sermon \u2014 New Live Preaching Outline",callback:async()=>{await p(t,_({speaker:t.settings.defaultSpeaker,location:t.settings.defaultLocation,bibleVersion:t.settings.defaultBibleVersion,paletteClass:t.settings.defaultSermonPalette})),new s.Notice("Live Preaching Outline created.")}}),t.addCommand({id:"the-preachers-tool:new-full-sermon-manuscript",name:"TPT Sermon \u2014 New Full Manuscript",callback:async()=>{await p(t,S({speaker:t.settings.defaultSpeaker,location:t.settings.defaultLocation,bibleVersion:t.settings.defaultBibleVersion,paletteClass:t.settings.defaultSermonPalette})),new s.Notice("Full Sermon Manuscript created.")}}),t.addCommand({id:"the-preachers-tool:new-short-sermon-outline",name:"TPT Sermon \u2014 New Short Sermon Outline",callback:async()=>{await p(t,w({speaker:t.settings.defaultSpeaker,location:t.settings.defaultLocation,bibleVersion:t.settings.defaultBibleVersion,paletteClass:t.settings.defaultSermonPalette})),new s.Notice("Short Sermon Outline created.")}}),t.addCommand({id:"the-preachers-tool:insert-scripture-block",name:"TPT Sermon \u2014 Insert Scripture Block",editorCallback:async()=>{await i(t.app,c.scriptureBlock)}}),t.addCommand({id:"the-preachers-tool:insert-word-study-box",name:"TPT Sermon \u2014 Insert Word Study Box",editorCallback:async()=>{await i(t.app,c.wordStudyBox)}}),t.addCommand({id:"the-preachers-tool:insert-cross-reference-box",name:"TPT Sermon \u2014 Insert Cross-Reference Box",editorCallback:async()=>{await i(t.app,c.crossReferenceBox)}}),t.addCommand({id:"the-preachers-tool:insert-invitation-drive",name:"TPT Sermon \u2014 Insert Invitation Drive",editorCallback:async()=>{await i(t.app,c.invitationDrive)}}),t.addCommand({id:"the-preachers-tool:insert-key-point-block",name:"TPT Sermon \u2014 Insert Key Point Block",editorCallback:async()=>{await i(t.app,c.keyPointBlock)}}),t.addCommand({id:"the-preachers-tool:insert-illustration-block",name:"TPT Sermon \u2014 Insert Illustration Block",editorCallback:async()=>{await i(t.app,c.illustrationBlock)}}),t.addCommand({id:"the-preachers-tool:new-workbook-module",name:"TPT Workbook \u2014 New Module",callback:async()=>{await p(t,P({author:t.settings.defaultAuthor,bibleVersion:t.settings.defaultBibleVersion,paletteClass:t.settings.defaultWorkbookPalette})),new s.Notice("Workbook Module created.")}}),t.addCommand({id:"the-preachers-tool:new-two-page-study-guide",name:"TPT Workbook \u2014 New Two-Page Study Guide",callback:async()=>{await p(t,C({author:t.settings.defaultAuthor,bibleVersion:t.settings.defaultBibleVersion,paletteClass:t.settings.defaultStudyPalette})),new s.Notice("Two-Page Study Guide created.")}}),t.addCommand({id:"the-preachers-tool:insert-lesson-section",name:"TPT Workbook \u2014 Insert Lesson Section",editorCallback:async()=>{await i(t.app,m.lessonSection)}}),t.addCommand({id:"the-preachers-tool:insert-workbook-questions",name:"TPT Workbook \u2014 Insert Study Questions",editorCallback:async()=>{await i(t.app,m.workbookQuestions)}}),t.addCommand({id:"the-preachers-tool:insert-journal-section",name:"TPT Workbook \u2014 Insert Journal Section",editorCallback:async()=>{await i(t.app,m.journalSection)}}),t.addCommand({id:"the-preachers-tool:insert-fill-in-the-blank-block",name:"TPT Workbook \u2014 Insert Fill-in-the-Blank Block",editorCallback:async()=>{await i(t.app,m.fillBlankBlock)}}),t.addCommand({id:"the-preachers-tool:insert-key-truth-block",name:"TPT Workbook \u2014 Insert Key Truth Block",editorCallback:async()=>{await i(t.app,m.keyTruthBlock)}}),t.addCommand({id:"the-preachers-tool:new-inductive-study",name:"TPT Study \u2014 New Inductive Study",callback:async()=>{await p(t,x({author:t.settings.defaultAuthor,bibleVersion:t.settings.defaultBibleVersion,paletteClass:t.settings.defaultStudyPalette})),new s.Notice("Inductive Study created.")}}),t.addCommand({id:"the-preachers-tool:new-verse-by-verse-study",name:"TPT Study \u2014 New Verse-by-Verse Study",callback:async()=>{await p(t,v({author:t.settings.defaultAuthor,bibleVersion:t.settings.defaultBibleVersion,paletteClass:t.settings.defaultStudyPalette})),new s.Notice("Verse-by-Verse Study created.")}}),t.addCommand({id:"the-preachers-tool:new-topical-study",name:"TPT Study \u2014 New Topical Study",callback:async()=>{await p(t,V({author:t.settings.defaultAuthor,bibleVersion:t.settings.defaultBibleVersion,paletteClass:t.settings.defaultStudyPalette})),new s.Notice("Topical Study created.")}}),t.addCommand({id:"the-preachers-tool:new-expository-study",name:"TPT Study \u2014 New Expository Study",callback:async()=>{await p(t,I({author:t.settings.defaultAuthor,bibleVersion:t.settings.defaultBibleVersion,paletteClass:t.settings.defaultStudyPalette})),new s.Notice("Expository Study created.")}}),t.addCommand({id:"the-preachers-tool:new-doctrinal-study",name:"TPT Study \u2014 New Doctrinal Study",callback:async()=>{await p(t,O({author:t.settings.defaultAuthor,bibleVersion:t.settings.defaultBibleVersion,paletteClass:t.settings.defaultStudyPalette})),new s.Notice("Doctrinal Study created.")}}),t.addCommand({id:"the-preachers-tool:insert-oia-block",name:"TPT Study \u2014 Insert Observation / Interpretation / Application",editorCallback:async()=>{await i(t.app,h.observationInterpretationApplication)}}),t.addCommand({id:"the-preachers-tool:insert-scripture-comparison-table",name:"TPT Study \u2014 Insert Scripture Comparison Table",editorCallback:async()=>{await i(t.app,h.scriptureComparisonTable)}}),t.addCommand({id:"the-preachers-tool:insert-key-word-table",name:"TPT Study \u2014 Insert Key Word Table",editorCallback:async()=>{await i(t.app,h.keyWordTable)}}),t.addCommand({id:"the-preachers-tool:insert-cross-reference-table",name:"TPT Study \u2014 Insert Cross-Reference Table",editorCallback:async()=>{await i(t.app,h.crossReferenceTable)}}),t.addCommand({id:"the-preachers-tool:insert-discussion-questions",name:"TPT Study \u2014 Insert Discussion Questions",editorCallback:async()=>{await i(t.app,h.discussionQuestions)}}),t.addCommand({id:"the-preachers-tool:apply-sermon-print-profile",name:"TPT Export \u2014 Apply Sermon Print Profile",callback:async()=>{let e=t.app.workspace.getActiveFile();if(!e){new s.Notice("No active file.");return}await u(t.app,e,"tpt-sermon","tpt-print-sermon","tpt-export-pdf-sermon"),new s.Notice("Sermon print profile applied.")}}),t.addCommand({id:"the-preachers-tool:apply-study-print-profile",name:"TPT Export \u2014 Apply Study Guide Print Profile",callback:async()=>{let e=t.app.workspace.getActiveFile();if(!e){new s.Notice("No active file.");return}await u(t.app,e,"tpt-study","tpt-print-study","tpt-export-pdf-study"),new s.Notice("Study print profile applied.")}}),t.addCommand({id:"the-preachers-tool:apply-workbook-print-profile",name:"TPT Export \u2014 Apply Workbook Print Profile",callback:async()=>{let e=t.app.workspace.getActiveFile();if(!e){new s.Notice("No active file.");return}await u(t.app,e,"tpt-workbook","tpt-print-workbook","tpt-export-pdf-workbook"),new s.Notice("Workbook print profile applied.")}}),t.addCommand({id:"the-preachers-tool:apply-print-friendly-mode",name:"TPT Export \u2014 Apply Print-Friendly Mode",callback:async()=>{let e=t.app.workspace.getActiveFile();if(!e){new s.Notice("No active file.");return}await u(t.app,e,"tpt-print-minimal"),new s.Notice("Print-friendly mode applied.")}}),t.addCommand({id:"the-preachers-tool:apply-bw-print-mode",name:"TPT Export \u2014 Apply Black & White Print Mode",callback:async()=>{let e=t.app.workspace.getActiveFile();if(!e){new s.Notice("No active file.");return}await u(t.app,e,"tpt-print-bw"),new s.Notice("Black & white print mode applied.")}}),t.addCommand({id:"the-preachers-tool:insert-page-break",name:"TPT Export \u2014 Insert Page Break",editorCallback:async()=>{await i(t.app,`
<div class="page-break"></div>
`)}})}var T=class extends B.Plugin{async onload(){await this.loadSettings(),this.addSettingTab(new y(this.app,this)),A(this),console.log("The Preacher's Tool loaded.")}onunload(){console.log("The Preacher's Tool unloaded.")}async loadSettings(){this.settings=Object.assign({},k,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}};
