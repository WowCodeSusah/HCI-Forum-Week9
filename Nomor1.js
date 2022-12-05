function canGivevBlooc(blood1 , blood2) {
    if (blood1 == "O-") {
        if (blood2 == 'string') {
            return "True"
        }
    } else if (blood1 == "O+") {
        if (blood2 == "O+" || blood2 == "A+" || blood2 == "AB+" || blood2 == "B+") {
            return "True"
        } else {
            return "False"
        }
    } else if (blood1 == "A-") {
        if (blood2 == "AB+" || blood2 == "A+" || blood2 == "A-" || blood2 == "AB-") {
            return "True"
        } else {
            return "False"
        }
    } else if (blood1 == "A+") {
        if (blood2 == "AB+" || blood2 == "A+") {
            return "True"
        } else {
            return "False"
        }
    } else if (blood1 == "B-") {
        if (blood2 == "AB+" || blood2 == "AB-" || blood2 == "B+" || blood2 == "B-" ) {
            return "True"
        } else {
            return "False"
        }
    } else if (blood1 == "B+") {
        if (blood2 == "AB+" || blood2 == "B+") {
            return "True"
        } else {
            return "False"
        }
    } else if (blood1 == "AB-") {
        if (blood2 == "AB-" || blood2 == "AB+") {
            return "True"
        } else {
            return "False"
        }
    } else if (blood1 == "AB+") {
        if (blood2 == "AB+") {
            return "True"
        } else {
            return "False"
        }
    }
}

console.log(canGivevBlooc("O+", "A+"))
console.log(canGivevBlooc("A-", "B-"))
console.log(canGivevBlooc("A-", "AB+"))