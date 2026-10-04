// Expanded exercise database matching workout.lol options
var exercises = [
    // Shoulders
    { muscle: "shoulders", name: "Wall slides", equipment: "none" },
    { muscle: "shoulders", name: "Pike push-ups", equipment: "none" },
    { muscle: "shoulders", name: "Dumbbell shoulder press", equipment: "dumbbell" },
    { muscle: "shoulders", name: "Dumbbell lateral raise", equipment: "dumbbell" },
    { muscle: "shoulders", name: "Band face pulls", equipment: "band" },
    { muscle: "shoulders", name: "Band overhead press", equipment: "band" },

    // Chest
    { muscle: "chest", name: "Wall push-ups", equipment: "none" },
    { muscle: "chest", name: "Standard floor push-ups", equipment: "none" },
    { muscle: "chest", name: "Dumbbell floor press", equipment: "dumbbell" },
    { muscle: "chest", name: "Dumbbell chest flyes", equipment: "dumbbell" },
    { muscle: "chest", name: "Band chest press", equipment: "band" },

    // Biceps
    { muscle: "biceps", name: "Chin-ups", equipment: "none" },
    { muscle: "biceps", name: "Dumbbell curls", equipment: "dumbbell" },
    { muscle: "biceps", name: "Dumbbell hammer curls", equipment: "dumbbell" },
    { muscle: "biceps", name: "Band curls", equipment: "band" },

    // Forearms
    { muscle: "forearms", name: "Light dumbbell hold", equipment: "dumbbell" },
    { muscle: "forearms", name: "Dumbbell wrist curls", equipment: "dumbbell" },
    { muscle: "forearms", name: "Reverse band curls", equipment: "band" },

    // Abs
    { muscle: "abs", name: "Dead bug", equipment: "none" },
    { muscle: "abs", name: "Plank hold", equipment: "none" },
    { muscle: "abs", name: "Bicycle crunches", equipment: "none" },
    { muscle: "abs", name: "Band woodchoppers", equipment: "band" },

    // Quads
    { muscle: "quads", name: "Bodyweight squat", equipment: "none" },
    { muscle: "quads", name: "Walking lunges", equipment: "none" },
    { muscle: "quads", name: "Goblet squats", equipment: "dumbbell" },
    { muscle: "quads", name: "Band resisted squats", equipment: "band" },

    // Upper Back
    { muscle: "upperback", name: "Standing shoulder-blade squeeze", equipment: "none" },
    { muscle: "upperback", name: "Prone Y-T-W raises", equipment: "none" },
    { muscle: "upperback", name: "Dumbbell shrugs", equipment: "dumbbell" },
    { muscle: "upperback", name: "Band pull-aparts", equipment: "band" },

    // Triceps
    { muscle: "triceps", name: "Close-grip wall push-ups", equipment: "none" },
    { muscle: "triceps", name: "Bench dips", equipment: "none" },
    { muscle: "triceps", name: "Overhead dumbbell extension", equipment: "dumbbell" },
    { muscle: "triceps", name: "Band pushdowns", equipment: "band" },

    // Lats
    { muscle: "lats", name: "Doorframe bodyweight rows", equipment: "none" },
    { muscle: "lats", name: "Dumbbell row", equipment: "dumbbell" },
    { muscle: "lats", name: "Seated band row", equipment: "band" },
    { muscle: "lats", name: "Band lat pulldowns", equipment: "band" },

    // Glutes
    { muscle: "glutes", name: "Glute bridge", equipment: "none" },
    { muscle: "glutes", name: "Single-leg glute bridge", equipment: "none" },
    { muscle: "glutes", name: "Dumbbell Romanian deadlift", equipment: "dumbbell" },
    { muscle: "glutes", name: "Band kickbacks", equipment: "band" },

    // Hamstrings
    { muscle: "hamstrings", name: "Bodyweight hip hinge", equipment: "none" },
    { muscle: "hamstrings", name: "Nordic hamstring curl progressions", equipment: "none" },
    { muscle: "hamstrings", name: "Dumbbell good mornings", equipment: "dumbbell" },
    { muscle: "hamstrings", name: "Band hamstring curls", equipment: "band" },

    // Calves
    { muscle: "calves", name: "Supported calf raises", equipment: "none" },
    { muscle: "calves", name: "Single-leg calf raises", equipment: "none" },
    { muscle: "calves", name: "Dumbbell weighted calf raises", equipment: "dumbbell" }
];

var muscles = ["shoulders", "chest", "biceps", "forearms", "abs", "quads",
    "upperback", "triceps", "lats", "glutes", "hamstrings", "calves"];
var names = ["Shoulders", "Chest", "Biceps", "Forearms", "Abs", "Quads",
    "Upper back", "Triceps", "Lats", "Glutes", "Hamstrings", "Calves"];
var selected = [];

// Matching instructions array for each indexed exercise above
var instructions = [
    // Shoulders
    ["Stand near a wall with elbows bent.", "Slide arms upward smoothly.", "Lower slowly."],
    ["Set up in a plank with hips high.", "Lower head toward the floor between hands.", "Push back up."],
    ["Hold dumbbells at shoulder height.", "Press weights straight overhead.", "Lower back with control."],
    ["Stand upright holding light dumbbells.", "Raise arms out to sides up to shoulder height.", "Lower slowly."],
    ["Anchor band at head height.", "Pull handles directly toward face while flaring elbows.", "Release with control."],
    ["Stand on band and grip handles at shoulders.", "Press overhead until arms extend.", "Lower slowly."],

    // Chest
    ["Place hands on wall at chest height.", "Bend elbows to bring chest forward.", "Push back smoothly."],
    ["Start in a high plank position.", "Lower chest toward floor keeping core tight.", "Push straight back up."],
    ["Lie back holding dumbbells over chest.", "Lower elbows to 90 degrees.", "Press back up to center."],
    ["Lie on back holding dumbbells above chest.", "Open arms outward in a wide arc.", "Squeeze chest to bring weights back."],
    ["Loop band behind back.", "Press handles forward until arms lock out.", "Return slowly."],

    // Biceps
    ["Grip bar palms facing toward you.", "Pull chest up toward bar.", "Lower down under control."],
    ["Stand with dumbbells at sides.", "Curl palms up toward shoulders.", "Lower back down slowly."],
    ["Hold dumbbells with palms facing each other.", "Curl weights up maintaining neutral grip.", "Lower with control."],
    ["Stand on band holding ends.", "Curl hands upward keeping elbows fixed.", "Release slowly."],

    // Forearms
    ["Hold dumbbells at sides with neutral wrists.", "Maintain upright posture.", "Set down when grip tires."],
    ["Rest forearms on thighs with palms up.", "Curl wrists upward toward body.", "Lower back down gently."],
    ["Stand on band with palms facing down.", "Curl wrists upward against band resistance.", "Lower with control."],

    // Abs
    ["Lie on back with arms up and knees bent.", "Extend opposite arm and leg simultaneously.", "Return and switch sides."],
    ["Hold a straight push-up or elbow position.", "Keep glutes and core engaged.", "Hold steady while breathing."],
    ["Lie back with hands behind head.", "Bring elbow toward opposite knee while extending other leg.", "Alternate smoothly."],
    ["Anchor band to side.", "Rotate torso away pulling band across body.", "Return slowly."],

    // Quads
    ["Stand feet shoulder-width apart.", "Squat down keeping knees over toes.", "Drive back up through heels."],
    ["Step forward into a lunge position.", "Lower back knee toward floor.", "Push up and step through."],
    ["Hold dumbbell close to chest.", "Squat deeply into hips.", "Stand back up smoothly."],
    ["Loop band around knees.", "Perform squat against band tension.", "Return upright."],

    // Upper Back
    ["Sit or stand upright.", "Squeeze shoulder blades together.", "Release smoothly."],
    ["Lie face down on floor.", "Raise arms into Y, T, and W positions sequentially.", "Lower gently."],
    ["Hold heavy dumbbells at sides.", "Shrug shoulders toward ears.", "Lower back down with control."],
    ["Hold band out in front at shoulder height.", "Pull hands outward to stretch band across chest.", "Return slowly."],

    // Triceps
    ["Position hands close together on wall.", "Bend elbows keeping them close to sides.", "Push away."],
    ["Place hands on edge of bench behind you.", "Lower hips toward floor by bending elbows.", "Press back up."],
    ["Hold single dumbbell overhead with both hands.", "Lower weight behind head.", "Extend arms back up."],
    ["Anchor band high.", "Push handles down until arms extend fully.", "Return to 90 degrees."],

    // Lats
    ["Grip sturdy doorframe while leaning back.", "Pull chest toward frame.", "Extend arms smoothly."],
    ["Bend forward supporting one hand.", "Row dumbbell toward hip.", "Lower with control."],
    ["Sit with band around feet.", "Pull handles back toward ribs.", "Release slowly."],
    ["Anchor band overhead.", "Pull handles down toward collarbone.", "Return slowly."],

    // Glutes
    ["Lie on back with knees bent.", "Lift hips toward ceiling.", "Lower with control."],
    ["Lift one leg in the air while lying down.", "Drive through grounded heel to raise hips.", "Lower smoothly."],
    ["Hold dumbbells at thighs with soft knees.", "Hinge forward at hips.", "Squeeze glutes to stand."],
    ["Anchor band to ankle.", "Kick leg backward against tension.", "Return under control."],

    // Hamstrings
    ["Stand feet hip-width apart.", "Hinge forward at hips with flat back.", "Return upright."],
    ["Kneel with feet anchored behind.", "Lower torso forward slowly using hamstrings.", "Push back up."],
    ["Hold weight at chest.", "Hinge hips back while keeping back flat.", "Drive hips forward to stand."],
    ["Loop band around heel while lying face down.", "Curl heel toward glutes.", "Lower back with control."],

    // Calves
    ["Stand on edge of step.", "Raise up on toes.", "Lower heels below step height."],
    ["Balance on one foot.", "Rise high onto ball of foot.", "Lower under control."],
    ["Hold dumbbells at sides.", "Perform calf raises on flat ground or step.", "Lower smoothly."]
];

var routine = [];
var statusText = document.getElementById("status");

function toggleMuscle(muscle) {
    var found = -1;
    for (var i = 0; i < selected.length; i++) {
        if (selected[i] == muscle) {
            found = i;
        }
    }
    if (found == -1) {
        selected.push(muscle);
    } else {
        selected.splice(found, 1);
    }
    showSelection();
}

function showSelection() {
    var labels = "";
    for (var i = 0; i < muscles.length; i++) {
        var button = document.getElementById(muscles[i]);
        button.className = button.className.replace(" selected", "");
        button.setAttribute("aria-pressed", "false");
        for (var j = 0; j < selected.length; j++) {
            if (muscles[i] == selected[j]) {
                button.className += " selected";
                button.setAttribute("aria-pressed", "true");
                if (labels != "") {
                    labels += ", ";
                }
                labels += names[i];
            }
        }
    }
    if (labels == "") {
        labels = "Nothing selected yet.";
    }
    document.getElementById("selection").textContent = labels;
}

function buildRoutine() {
    if (selected.length == 0) {
        statusText.textContent = "Select at least one muscle group first.";
        return;
    }
    routine = [];
    var equipment = document.getElementById("equipment").value;
    var missing = "";

    // Pull ALL matching exercises across selected muscle groups
    for (var i = 0; i < selected.length; i++) {
        var matched = false;
        for (var j = 0; j < exercises.length; j++) {
            if (exercises[j].muscle == selected[i]) {
                if (exercises[j].equipment == "none" || exercises[j].equipment == equipment) {
                    routine.push(j);
                    matched = true;
                }
            }
        }
        if (matched == false) {
            if (missing != "") {
                missing += ", ";
            }
            for (var k = 0; k < muscles.length; k++) {
                if (muscles[k] == selected[i]) {
                    missing += names[k];
                }
            }
        }
    }

    statusText.textContent = "Shortlist updated below.";
    if (missing != "") {
        statusText.textContent = "No matching equipment option for: " + missing + ".";
    }
    showRoutine();
    saveRoutine();
}

function showRoutine() {
    var html = "";
    var videoHtml = "";
    for (var i = 0; i < routine.length; i++) {
        var exercise = exercises[routine[i]];
        html += "<article class='exercise'><p class='eyebrow'>" + exercise.muscle + "</p>";
        html += "<h3>" + exercise.name + "</h3><p>Equipment: " + exercise.equipment + "</p>";
        html += "<ol>";
        for (var step = 0; step < instructions[routine[i]].length; step++) {
            html += "<li>" + instructions[routine[i]][step] + "</li>";
        }
        html += "</ol>";
        var searchWords = "";
        for (var letter = 0; letter < exercise.name.length; letter++) {
            if (exercise.name[letter] == " ") {
                searchWords += "+";
            } else {
                searchWords += exercise.name[letter];
            }
        }
        videoHtml += "<a href='https://www.youtube.com/results?search_query=" + searchWords + "+exercise+demonstration' target='_blank' rel='noopener'>Find video: " + exercise.name + "</a>";
        html += "<button class='secondary' type='button' onclick='removeExercise(" + i + ")'>Remove</button></article>";
    }
    if (routine.length == 0) {
        html = "<p class='muted'>Your shortlist is empty. Select muscles above to find exercises.</p>";
    }
    document.getElementById("exerciseList").innerHTML = html;
    if (videoHtml == "") {
        videoHtml = "<p>Build a shortlist first to see demonstration links.</p>";
    }
    document.getElementById("videoLinks").innerHTML = videoHtml;
}

function removeExercise(index) {
    routine.splice(index, 1);
    showRoutine();
    saveRoutine();
}

function saveRoutine() {
    localStorage.setItem("moveMateMuscleRoutine", JSON.stringify(routine));
}

document.getElementById("buildButton").addEventListener("click", buildRoutine);
document.getElementById("resetButton").addEventListener("click", function() {
    selected = [];
    showSelection();
    statusText.textContent = "Selection reset. Your saved shortlist is unchanged.";
});
document.getElementById("clearButton").addEventListener("click", function() {
    routine = [];
    showRoutine();
    saveRoutine();
});

var saved = localStorage.getItem("moveMateMuscleRoutine");
if (saved != null) {
    var loaded = JSON.parse(saved);
    for (var i = 0; i < loaded.length; i++) {
        for (var j = 0; j < exercises.length; j++) {
            if (loaded[i] === j) {
                routine.push(j);
            }
        }
    }
}
showRoutine();

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('videoModal');
  const drinkMilkBtn = document.getElementById('drinkMilkBtn');
  const nahGoodBtn = document.getElementById('nahGoodBtn');
  const video = document.getElementById('adVideo');

  function playAudio() {
    if (video && modal && modal.style.display !== 'none') {
      video.muted = false;
      video.volume = 1.0;
      video.play().catch(e => console.error("Audio error:", e));
    }
  }

  function stopAudio() {
    if (video) {
      video.pause();
      video.muted = true;
    }
  }

  if (video) {
    video.muted = true;
    video.play().catch(e => console.warn("Muted autoplay error:", e));
  }

  window.addEventListener('click', playAudio, { once: true });
  window.addEventListener('touchstart', playAudio, { once: true });

  if (drinkMilkBtn && modal) {
    drinkMilkBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stopAudio();
      modal.style.display = 'none';
    });
  }

  let nahBtnScale = 1.0;
  if (nahGoodBtn) {
    nahGoodBtn.addEventListener('click', (e) => {
      e.preventDefault();
      nahBtnScale -= 0.15;
      if (nahBtnScale < 0.05) {
        nahBtnScale = 0;
      }
      nahGoodBtn.style.transform = `scale(${nahBtnScale})`;
    });
  }
    
    
    // Inside document.addEventListener('DOMContentLoaded', () => { ... })

    const creditsLink = document.getElementById('creditsLink');
    const creditsModal = document.getElementById('creditsModal');
    const closeCredits = document.getElementById('closeCredits');

    if (creditsLink && creditsModal) {
      creditsLink.addEventListener('click', (e) => {
        e.preventDefault();
        creditsModal.style.display = 'flex';
      });
    }

    if (closeCredits && creditsModal) {
      closeCredits.addEventListener('click', () => {
        creditsModal.style.display = 'none';
      });
    }

    // Close credits modal if user clicks outside of the content box
    window.addEventListener('click', (e) => {
      if (e.target === creditsModal) {
        creditsModal.style.display = 'none';
      }
    });
    
    
    
    
    
    
});
