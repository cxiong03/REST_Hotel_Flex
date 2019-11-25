var hotelRooms = {
    roomTypes: ["single", "double", "queen", "king"],
    availableRooms: [[101, 102, 103], [201, 202, 203], [301, 302, 303], [401, 402, 403]],
    selectedRooms: [[], [], [], []],

    listAvailableRooms: function () {
        var roomDropDown = "<select id='hotelRoomDropDownList'>";
            for (var i = 0; i < this.availableRooms.length; i++) {
                roomDropDown += "<optgroup label='" + this.roomTypes[i] + "'>";
                    for (var j = 0; j < this.availableRooms[i].length; j++) {
                        roomDropDown += "<option>" + this.availableRooms[i][j] + "</option>";
                    }
                    roomDropDown += "</optgroup>";
            }
            roomDropDown += "</select>";
            document.getElementById("availableRoomList").innerHTML = roomDropDown;
    },

    checkoutRooms: function () {
        var currentSelectedRoom= document.getElementById("hotelRoomDropDownList").value;
        for (var i = 0; i < this.availableRooms.length; i++) {
            for (var j = 0; j < this.availableRooms[i].length; j++) {
                if (currentSelectedRoom == this.availableRooms[i][j]) {
                    this.selectedRooms[i].push(this.availableRooms[i].splice(j, 1));
                }
            }
        }
        this.listAvailableRooms();
        alert("Your room is book!");
    },

    listBookedRooms: function () {
        var removeBookedRooms = "<select id='removeDropDownList'>";
            for (var i = 0; i < this.availableRooms.length; i++) {
                removeBookedRooms += "<optgroup label='" + this.roomTypes[i] + "'>";
                    for (var j = 0; j < this.selectedRooms[i].length; j++) {
                        removeBookedRooms += "<option>" + this.selectedRooms[i][j] + "</option>";
                    }
                    removeBookedRooms += "</optgroup>";
            }
            removeBookedRooms += "</select>";
            document.getElementById("bookedRoomList").innerHTML = removeBookedRooms;
    },

    removeRooms: function () {
        var selectedRemoveRooms = document.getElementById("removeDropDownList").value;
        for (var i = 0; i < this.availableRooms.length; i++) {
            for (var j = 0; j < this.availableRooms[i].length; j++) {
                if (selectedRemoveRooms == this.selectedRooms[i][j]) {
                    this.availableRooms[i].push(this.selectedRooms[i].splice(j,1));
                }
            }
        }
        this.listBookedRooms();
        alert("Room " + selectedRemoveRooms + " has been removed!");
    }
};
hotelRooms.listAvailableRooms();