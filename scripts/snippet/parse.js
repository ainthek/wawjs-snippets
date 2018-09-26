module.exports = (text) => {
    let [tabTrigger, description, ...content] = text.split(/\r\n|\n|\r/);

    return {
        tabTrigger: tabTrigger.replace(/^\/\/\s+/, ""),
        description: description.replace(/^\/\/\s+/, ""),
        content: content.join("\n"),
    };
};