import { Controller, Get } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { DiskService } from 'src/disk/disk.service';
import { CpuService } from 'src/cpu/cpu.service';

@Controller('computer')
export class ComputerController {
    constructor(
        public computerService: ComputerService,
        private cpuService: CpuService,
        private diskService: DiskService
    ) { }

    @Get()
    run() {

        return [this.cpuService.compute(1, 2), this.diskService.getData()]
    }
}
