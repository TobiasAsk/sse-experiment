import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalysisParameters } from './analysis-editor/analysis-editor.component';

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  analysisUrl = 'http://localhost:5000/api/analyses';

  constructor(private httpClient: HttpClient) { }

  submitAnalysis(parameters: AnalysisParameters): Observable<any> {
    return this.httpClient.post(this.analysisUrl, parameters);
  }

}
