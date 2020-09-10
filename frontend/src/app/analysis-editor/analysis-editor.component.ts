import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnalysisService } from '../analysis.service';

export interface AnalysisParameters {
  releaseRate: Number;
  numFluxCap: Number;
}

@Component({
  selector: 'app-analysis-editor',
  templateUrl: './analysis-editor.component.html'
})
export class AnalysisEditorComponent implements OnInit {

  analysisForm: FormGroup;

  constructor(private analysisService: AnalysisService) {
    this.analysisForm = new FormGroup({
      releaseRate: new FormControl(''),
      numFluxCap: new FormControl('')
    });

    const notificationSource = new EventSource("http://localhost:5000/api/analyses/notification-stream", { withCredentials: true });
    notificationSource.onmessage = this.handleNotification;
  }

  handleNotification(notification: MessageEvent) {
    console.log(notification.data);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const parameters = {
      releaseRate: parseInt(this.analysisForm.value.releaseRate),
      numFluxCap: parseInt(this.analysisForm.value.numFluxCap)
    } as AnalysisParameters;
    console.log('parameters look good;', parameters);
    this.analysisService.submitAnalysis(parameters).subscribe(response => console.log(response));
  }
}
