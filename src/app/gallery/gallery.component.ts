import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public oddessaUrls: (string | IImage)[] = [
    'https://photos.smugmug.com/Blog/i-WpWMLZL/0/7b397b56/X3/IMG_8533-X3.jpg',
    'https://photos.smugmug.com/Blog/i-S5d3txk/0/d419a465/X3/IMG_8543-X3.jpg',
    'https://photos.smugmug.com/Blog/i-bSkhXrM/0/ddecf55b/X3/IMG_8556-X3.jpg',
    'https://photos.smugmug.com/Blog/i-7FFFkk7/0/5d699c08/X3/IMG_8575-X3.jpg',
    'https://photos.smugmug.com/Blog/i-zLqQQFh/0/e9b3cdd2/X3/IMG_8576-X3.jpg',
    'https://photos.smugmug.com/Blog/i-N4QgVg6/0/c3ba8686/X3/IMG_8580-X3.jpg',
    'https://photos.smugmug.com/Blog/i-SBPrTfK/0/e8d758de/X3/IMG_8591-X3.jpg',
    'https://photos.smugmug.com/Blog/i-Ns6VJ6j/0/5776b429/X3/IMG_8594-X3.jpg',
    'https://photos.smugmug.com/Blog/i-cPFwQgt/0/2d03ddb1/X3/IMG_8614-X3.jpg',
    'https://photos.smugmug.com/Blog/i-D4hVj2X/0/41eeb63e/X3/IMG_8625-X3.jpg',
    'https://photos.smugmug.com/Blog/i-prp8Rkv/0/12ad4371/X3/IMG_8628-X3.jpg',
    'https://photos.smugmug.com/Blog/i-RcC5tTF/0/0d1a972f/X3/IMG_8638-X3.jpg',
    'https://photos.smugmug.com/Blog/i-QCqFgJP/0/07608c79/X3/IMG_8696-X3.jpg',
    'https://photos.smugmug.com/Blog/i-VkTSgWg/0/3b38a18b/X3/IMG_8698-X3.jpg',
    'https://photos.smugmug.com/Blog/i-g2ZMz3t/0/df107e0d/X3/IMG_8716-X3.jpg',
    'https://photos.smugmug.com/Blog/i-xfvxrxc/0/7598f4e7/X3/IMG_8721-X3.jpg',
    'https://photos.smugmug.com/Blog/i-D6jXkG7/0/bde3f38c/X3/IMG_8739-X3.jpg',
    'https://photos.smugmug.com/Blog/i-SFhx5rs/0/e451d5f0/X3/IMG_8747-X3.jpg',
    'https://photos.smugmug.com/Blog/i-gfFQH3H/0/7d7b6d5f/X3/IMG_8751-X3.jpg',
    'https://photos.smugmug.com/Blog/i-JpmvB2J/0/e6804d7f/X3/IMG_8759-X3.jpg',
    'https://photos.smugmug.com/Blog/i-qkcrpMW/0/087dc609/X3/IMG_8764-X3.jpg',
    'https://photos.smugmug.com/Blog/i-Tvn3hBs/0/f2abd7d3/X3/IMG_8769-X3.jpg',
    'https://photos.smugmug.com/Blog/i-J5S5L6W/0/2b477a07/X3/IMG_8780-X3.jpg',
    'https://photos.smugmug.com/Blog/i-zgGb5wK/0/e72f32a6/X3/IMG_8791-X3.jpg',
    'https://photos.smugmug.com/Blog/i-sNcp8dC/0/27d07215/X3/IMG_8797-X3.jpg',
    'https://photos.smugmug.com/Blog/i-s8PbKBH/0/87753df4/X3/IMG_8804-X3.jpg',
    'https://photos.smugmug.com/Blog/i-7zMN48k/0/e27295e8/X3/IMG_8813-X3.jpg',
    'https://photos.smugmug.com/Blog/i-fNTVVwB/0/6f9b27b1/X3/IMG_8826-X3.jpg',
    'https://photos.smugmug.com/Blog/i-3VG99pv/0/495e4f43/X3/IMG_8839-X3.jpg',
    'https://photos.smugmug.com/Blog/i-6gFBsCd/0/cb903639/X3/IMG_8840-X3.jpg',
    'https://photos.smugmug.com/Blog/i-bGGv64s/0/e9f3f348/X3/IMG_8846-X3.jpg',
    'https://photos.smugmug.com/Blog/i-TSGmTQ6/0/cc83251c/X3/IMG_8849-X3.jpg',
    'https://photos.smugmug.com/Blog/i-Ch8xW6h/0/fe299250/X3/IMG_8854-X3.jpg',
    'https://photos.smugmug.com/Blog/i-69SWnVj/0/16f2a448/X3/IMG_8866-X3.jpg',
    'https://photos.smugmug.com/Blog/i-VSxxJjd/0/95b20c7e/X3/IMG_8882-X3.jpg',
    'https://photos.smugmug.com/Blog/i-kkP8BWG/0/3fa32fc4/X3/IMG_8908-X3.jpg',
    'https://photos.smugmug.com/Blog/i-L3bTmRw/0/76e6e4cc/X3/IMG_8914-X3.jpg',
    'https://photos.smugmug.com/Blog/i-GbV6wLf/0/2e648cc1/X3/IMG_8917-X3.jpg',
    'https://photos.smugmug.com/Blog/i-rNdCRRn/0/15ee7315/X3/IMG_8919-X3.jpg',
    'https://photos.smugmug.com/Blog/i-d8JHcK4/0/7925a5a6/X3/IMG_8924-X3.jpg',
    'https://photos.smugmug.com/Blog/i-RRWRgT7/0/734cf1e1/X3/IMG_8927-X3.jpg',
    'https://photos.smugmug.com/Blog/i-zgP7wbN/0/a17eb3c7/X3/IMG_8936-X3.jpg',
    'https://photos.smugmug.com/Blog/i-L6sGr8Z/0/95e8f6d8/X3/IMG_8942-X3.jpg',
    'https://photos.smugmug.com/Blog/i-WcnzhTF/0/13b13f94/X3/IMG_8950-X3.jpg',
    'https://photos.smugmug.com/Blog/i-jNP2J7f/0/86fd25ea/X3/IMG_8976-X3.jpg',
    'https://photos.smugmug.com/Blog/i-rWg7VPp/0/e6905595/X3/IMG_8985-X3.jpg',
    'https://photos.smugmug.com/Blog/i-kD2rT2j/0/74c9a456/X3/IMG_8990-X3.jpg',
    'https://photos.smugmug.com/Blog/i-Lj6FwhM/0/a00036fb/X3/IMG_8999-X3.jpg',
    'https://photos.smugmug.com/Blog/i-6x38H2z/0/1ca5fbe8/X3/IMG_9024-X3.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
