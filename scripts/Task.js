class Task {
    constructor(title, description, color, date, status, budget) {  //A parameter is a placeholder name for data that a function or method expects.
        this.title = title;//Parameters = names (placeholders) title, description, color, date, status, budget
        this.desc = description;// Values come from the user's input in the HTML form
        this.color = color; //desc= Note: mapped to desc internally
        this.date = date;
        this.status = status;
        this.budget = budget;
    }
}

