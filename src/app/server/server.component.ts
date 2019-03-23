import { Component, OnInit } from "@angular/core";

@Component({
  selector: ".app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  allowAdd = false;
  serverAddedStatus = "Server not added";
  serverName = "";
  twoWayServerName = "";
  isPlaying = true;
  styleObj = {};
  isClassPrimaryBtn = false;
  classObj = {
    "btn-primary": this.isClassPrimaryBtn,
    "btn-secondary": !this.isClassPrimaryBtn
  };
  ngOnInit(): void {
    setTimeout(() => {
      this.allowAdd = true;
    }, 2000);
  }
  serverId = 10;

  getServerStatus() {
    return "online";
  }
  onServerAdded() {
    this.serverAddedStatus = "Server added";
  }
  onServerNameAdded(e: Event) {
    this.serverName = (e.target as HTMLInputElement).value;
  }
  onClickToggleButton() {
    this.isPlaying = !this.isPlaying;
  }
  getColor() {
    let red1 = Math.floor(Math.random() * 256);
    let green1 = Math.floor(Math.random() * 256);
    let blue1 = Math.floor(Math.random() * 256);
    let red2 = Math.floor(Math.random() * 256);
    let green2 = Math.floor(Math.random() * 256);
    let blue2 = Math.floor(Math.random() * 256);
    let rgb1 = `rgb(${red1},${green1},${blue1})`;
    let rgb2 = `rgb(${red2},${green2},${blue2})`;
    this.styleObj = {
      "background-image": `linear-gradient(to right,${rgb1}, ${rgb2})`
    };
  }
  changeClass() {
    this.isClassPrimaryBtn = !this.isClassPrimaryBtn;
    this.classObj = {
      "btn-primary": this.isClassPrimaryBtn,
      "btn-secondary": !this.isClassPrimaryBtn
    };
  }
}
