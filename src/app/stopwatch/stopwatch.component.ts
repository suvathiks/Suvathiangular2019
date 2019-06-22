import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { timer } from 'rxjs';
import { Subscription, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

    light: boolean = false;
    running: boolean = false;
    startText = 'Start';
    time :number = 0;
    private watcher: Subscription = null;
    laps: string[] = [];

    ngOnInit() {
    }

    startTimer() {
        this.running = !this.running;
        if (this.running) {
            this.startText = 'Stop';
            this.light = false;
            this.watcher = timer(0, 10).subscribe(() => {
                this.time = this.time + 1;
            });
        }
        else {
            this.running = false;
            this.startText = 'Resume';
            this.light = true;
            this.watcher.unsubscribe();
            this.watcher = null;
        }
    }

    clearTimer() {
        this.startText = 'Start';
        this.time = 0;
        this.light = false;
        this.watcher.unsubscribe();
        this.laps = [];
    }


    formattedSecond(): string {
        return moment().second(this.time).format('ss');
    }
    formattedMinute(): string {
        return moment().minute(0).second(this.time).format('mm');
    }
    formattedHour(): string {
        return moment().hour(0).minute(0).second(this.time).format('HH');
    }


}
