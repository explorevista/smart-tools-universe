// Smart Tools Universe - Tool System Core

const tools = [
    {
        name: "Resume Maker",
        description: "Create ATS-friendly resumes",
        url: "tools/resume-maker.html"
    },
    {
        name: "PDF Toolkit",
        description: "Merge, split and compress PDFs",
        url: "tools/pdf-toolkit.html"
    },
    {
        name: "Password Generator",
        description: "Generate strong passwords",
        url: "tools/password-generator.html"
    },
    {
        name: "Translator",
        description: "Translate text in multiple languages",
        url: "tools/translator.html"
    }
];

// OPEN TOOL FUNCTION
function openTool(index) {
    window.location.href = tools[index].url;
}
